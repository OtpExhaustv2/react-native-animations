import React from 'react';
import {Dimensions, StyleSheet, Text, View} from "react-native";
import Animated, {Extrapolate, interpolate, useAnimatedStyle} from "react-native-reanimated";

interface PageProps {
    title: string;
    index: number;
    translateX: Animated.SharedValue<number>;
}

const {width, height} = Dimensions.get('window');
const SIZE = width * .7;

const Page: React.FC<PageProps> = ({index, title, translateX}) => {
    const INPUT_RANGE = [(index - 1) * width, index * width, (index + 1) * width];

    const squareStyle = useAnimatedStyle(() => {
        const scale = interpolate(translateX.value, INPUT_RANGE, [0, 1, 0], Extrapolate.CLAMP);
        const borderRadius = interpolate(translateX.value, INPUT_RANGE, [0, SIZE / 2, 0], Extrapolate.CLAMP);
        return {
            opacity: interpolate(translateX.value, INPUT_RANGE, [-1, 1, -1], Extrapolate.CLAMP),
            borderRadius,
            transform: [{scale}]
        }
    });

    const textStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(translateX.value, INPUT_RANGE, [-2, 1, -2], Extrapolate.CLAMP),
            transform: [
                {
                    translateY: interpolate(translateX.value, INPUT_RANGE, [-height, 0, height], Extrapolate.CLAMP)
                }
            ]
        }
    });

    return (
        <View style={[styles.container, {
            backgroundColor: `rgba(0, 0, 256, 0.${index + 2})`
        }]}>
            <Animated.View style={[styles.square, squareStyle]}/>
            <Animated.View style={[{position: 'absolute'}, textStyle]}>
                <Text style={styles.text}>{title}</Text>
            </Animated.View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    square: {
        backgroundColor: 'rgba(0, 0, 256, .4)',
        width: SIZE,
        height: SIZE,
    },
    text: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 70,
        fontWeight: '700'
    }
})

export default Page;