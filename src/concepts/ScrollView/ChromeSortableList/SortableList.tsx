import React, {ReactElement} from "react";
import {ScrollView} from "react-native-gesture-handler";

import Item from "./Item";
import {COL, Positions, SIZE} from "./Config";
import Animated, {useAnimatedRef, useAnimatedScrollHandler, useSharedValue} from "react-native-reanimated";

interface ListProps {
    children: ReactElement<{ id: string }>[];
}

const List = ({children}: ListProps) => {
    const scrollView = useAnimatedRef<Animated.ScrollView>();
    const scrollY = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: ({contentOffset: {y}}) => scrollY.value = y,
    })
    const positions = useSharedValue<Positions>(Object.assign(
        {},
        ...children.map((child, index) => ({[child.props.id]: index}))
    ));
    return (
        <Animated.ScrollView
            ref={scrollView}
            onScroll={onScroll}
            contentContainerStyle={{
                height: Math.ceil(children.length / COL) * SIZE,
            }}
            showsVerticalScrollIndicator={false}
            bounces={false}
            scrollEventThrottle={16}
        >
            {children.map((child) => {
                return (
                    <Item scrollView={scrollView} scrollY={scrollY} key={child.props.id} id={child.props.id}
                          positions={positions}>
                        {child}
                    </Item>
                );
            })}
        </Animated.ScrollView>
    );
};

export default List;
