import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {SongType, SONG_HEIGHT, Positions, songs, objectMove, SCROLL_HEIGHT_THRESHOLD} from "./Constants";
import Song from './Song';
import Animated, {
    cancelAnimation,
    useAnimatedGestureHandler, useAnimatedReaction,
    useAnimatedStyle, useDerivedValue,
    useSharedValue,
    withSpring, withTiming
} from "react-native-reanimated";
import {PanGestureHandler, PanGestureHandlerGestureEvent} from "react-native-gesture-handler";
import {clamp} from "react-native-redash";
import {useSafeAreaInsets} from "react-native-safe-area-context";

interface MovableSongProps {
    song: SongType;
    positions: Animated.SharedValue<Positions>;
    scrollY: Animated.SharedValue<number>;
}

const MovableSong: React.FC<MovableSongProps> = ({song: {id, artist, title, cover}, positions, scrollY}) => {
    const dimensions = useWindowDimensions();
    const insets = useSafeAreaInsets();

    const isMoving = useSharedValue(false);
    const top = useSharedValue(positions.value[id] * SONG_HEIGHT);

    const opacity = useDerivedValue(() => {
        return withSpring(isMoving.value ? 0.2 : 0);
    });

    useAnimatedReaction(() => positions.value[id],
        (currentPosition, previousPosition) => {
            if (currentPosition !== previousPosition) {
                if (!isMoving.value) {
                    top.value = withTiming(currentPosition * SONG_HEIGHT);
                }
            }
        },
        [isMoving]
    );

    const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
        onStart: () => {
            isMoving.value = true;
        },
        onActive: ({absoluteY}) => {
            const y = absoluteY + scrollY.value;

            if (y <= scrollY.value + SCROLL_HEIGHT_THRESHOLD) {
                // scroll up
                scrollY.value = withTiming(0, {duration: 150});
            } else if (y >= scrollY.value + dimensions.height - SCROLL_HEIGHT_THRESHOLD) {
                // scroll down
                const contentHeight = songs.length * SONG_HEIGHT;
                const containerHeight = dimensions.height - insets.top - insets.bottom;
                const maxScroll = contentHeight - containerHeight;
                scrollY.value = withTiming(maxScroll, {duration: 150});
            } else {
                cancelAnimation(scrollY);
            }

            top.value = withTiming(y - SONG_HEIGHT, {
                duration: 16
            });

            const newPosition = clamp(Math.floor(y / SONG_HEIGHT), 0, songs.length - 1);
            if (newPosition !== positions.value[id]) {
                positions.value = objectMove(
                    positions.value,
                    positions.value[id],
                    newPosition
                )
            }
        },
        onEnd: () => {
            top.value = withTiming(positions.value[id] * SONG_HEIGHT, {}, () => {
                isMoving.value = false;
            });
        }
    });

    const rStyle = useAnimatedStyle(() => {
        return {
            top: top.value,
            backgroundColor: 'white',
            zIndex: isMoving.value ? 1 : 0,
            shadowColor: 'black',
            shadowOffset: {
                height: 0,
                width: 0
            },
            shadowOpacity: opacity.value,
            shadowRadius: 10
        }
    }, [isMoving])

    return (
        <Animated.View style={[styles.container, rStyle]}>
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View
                    style={{maxWidth: '80%'}}
                >
                    <Song song={{artist, title, cover, id}}/>
                </Animated.View>
            </PanGestureHandler>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
    }
});

export default MovableSong;
