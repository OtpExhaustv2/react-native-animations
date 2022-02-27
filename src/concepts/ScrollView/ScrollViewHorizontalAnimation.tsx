import React from 'react';
import Animated, {useAnimatedScrollHandler, useSharedValue} from 'react-native-reanimated';
import Page from "./Page";

interface ScrollViewHorizontalAnimationProps {
}

const WORDS = ['What', 'is', 'your', 'name', '?'];

const ScrollViewHorizontalAnimation: React.FC<ScrollViewHorizontalAnimationProps> = ({}) => {
    const translateX = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler((event) => {
        translateX.value = event.contentOffset.x;
    });

    return (
        <Animated.ScrollView
            onScroll={onScroll}
            scrollEventThrottle={16}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
        >
            {WORDS.map((word, index) => <Page title={word} index={index} translateX={translateX} key={index}/>)}
        </Animated.ScrollView>
    );

}

export default ScrollViewHorizontalAnimation;