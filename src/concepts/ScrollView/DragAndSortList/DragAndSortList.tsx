import React from 'react';
import {StyleSheet, StatusBar, ScrollView, SafeAreaView} from 'react-native';
import {listToObject, SONG_HEIGHT, songs} from "./Constants";
import MovableSong from "./MovableSong";
import Animated, {
    scrollTo,
    useAnimatedReaction,
    useAnimatedRef,
    useAnimatedScrollHandler,
    useSharedValue
} from "react-native-reanimated";
import {Positions} from "../ChromeSortableList/Config";

interface DragAndSortListProps {
}

const DragAndSortList: React.FC<DragAndSortListProps> = () => {
    const positions = useSharedValue<Positions>(listToObject(songs));
    const scrollY = useSharedValue(0);
    const scrollview = useAnimatedRef<ScrollView>();
    const handleScroll = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    })

    useAnimatedReaction(() => scrollY.value, (scrolling) => {
        scrollTo(scrollview, 0, scrolling, false);
    });

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                <Animated.ScrollView
                    ref={scrollview}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                    style={{
                        flex: 1,
                        position: 'relative',
                        backgroundColor: 'white',
                    }}
                    contentContainerStyle={{
                        height: songs.length * SONG_HEIGHT
                    }}
                >
                    {songs.map((song) => (
                        <MovableSong
                            positions={positions}
                            key={song.id}
                            song={song}
                            scrollY={scrollY}
                        />
                    ))}
                </Animated.ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default DragAndSortList;
