import React, {ReactNode, RefObject} from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {animationConfig, COL, getOrder, getPosition, Positions, SIZE} from "./Config";
import Animated, {
    scrollTo,
    useAnimatedGestureHandler, useAnimatedReaction,
    useAnimatedStyle,
    useSharedValue, withSpring,
    withTiming
} from "react-native-reanimated";
import {PanGestureHandler, PanGestureHandlerGestureEvent} from "react-native-gesture-handler";

interface ItemProps {
    children: ReactNode;
    id: string;
    positions: Animated.SharedValue<Positions>;
    scrollView: RefObject<Animated.ScrollView>;
    scrollY: Animated.SharedValue<number>;
}

const Item = ({children, positions, id, scrollView, scrollY}: ItemProps) => {
    const inset = useSafeAreaInsets();
    const containerHeight =
        Dimensions.get("window").height - inset.top - inset.bottom;
    const contentHeight = (Object.keys(positions.value).length / COL) * SIZE;
    const position = getPosition(positions.value[id]);
    const isGestureActive = useSharedValue(false);
    const translateX = useSharedValue(position.x);
    const translateY = useSharedValue(position.y);

    useAnimatedReaction(() => positions.value[id], (newOrder) => {
        const newPosition = getPosition(newOrder);
        translateX.value = withTiming(newPosition.x, animationConfig);
        translateY.value = withTiming(newPosition.y, animationConfig);
    });

    const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { x: number, y: number }>({
        onStart: (_, ctx) => {
            isGestureActive.value = true;
            ctx.x = translateX.value;
            ctx.y = translateY.value;
        },
        onActive: ({translationX, translationY}, ctx) => {
            translateX.value = translationX + ctx.x;
            translateY.value = translationY + ctx.y;
            const oldOder = positions.value[id];
            const newOrder = getOrder(translateX.value, translateY.value);
            if (oldOder !== newOrder) {
                const idToSwap = Object.keys(positions.value).find(key => positions.value[key] === newOrder);
                if (idToSwap) {
                    const newPositions = {...positions.value};
                    newPositions[id] = newOrder;
                    newPositions[idToSwap] = oldOder;
                    positions.value = newPositions;
                }
            }
            const lowerBound = scrollY.value;
            const upperBound = lowerBound + containerHeight - SIZE;
            const maxScroll = contentHeight - containerHeight;
            const scrollLeft = maxScroll - scrollY.value;
            if (translateY.value < lowerBound) {
                const diff = Math.min(lowerBound - translateY.value, lowerBound);
                scrollY.value -= diff;
                ctx.y -= diff;
                translateY.value = translationY + ctx.y;
                scrollTo(scrollView, 0, scrollY.value, false);
            }
            if (translateY.value > upperBound) {
                const diff = Math.min(translateY.value - upperBound, scrollLeft);
                scrollY.value += diff;
                ctx.y += diff;
                translateY.value = translationY + ctx.y;
                scrollTo(scrollView, 0, scrollY.value, false);
            }
        },
        onEnd: () => {
            const destination = getPosition(positions.value[id]);
            translateX.value = withTiming(destination.x, animationConfig);
            translateY.value = withTiming(destination.y, animationConfig, () => {
                isGestureActive.value = false;
            });
        },
    })

    const rStyle = useAnimatedStyle(() => {
        const zIndex = isGestureActive.value ? 100 : 0;
        const scale = isGestureActive.value ? withTiming(1.1) : withTiming(1);
        return {
            zIndex,
            transform: [
                {translateX: translateX.value},
                {translateY: translateY.value},
                {scale}
            ]
        }
    })

    return (
        <Animated.View
            style={[styles.container, rStyle]}
        >
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View style={StyleSheet.absoluteFill}>
                    {children}
                </Animated.View>
            </PanGestureHandler>
        </Animated.View>);
};

export default Item;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: SIZE,
        height: SIZE,
    },
})
