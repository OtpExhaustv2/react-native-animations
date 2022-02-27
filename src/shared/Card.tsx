import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {ParamListBase} from '@react-navigation/native';

interface CardProps {
    text: string;
    onPress: () => void;
}

const Card: React.FC<CardProps> = ({text, onPress}) => {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Text>{text}</Text>
            </View>
        </TouchableWithoutFeedback>
    );

}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        width: '80%',
        height: 100,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Card;