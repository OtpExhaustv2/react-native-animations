import React from 'react';
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {ScrollViewParamsList} from "./ScrollViewParamsList";
import {ScrollViewHome, ScrollViewHorizontalAnimation} from "../../../concepts";

interface ScrollViewStackProps {
}

const Stack = createStackNavigator<ScrollViewParamsList>();

const ScrollViewStack: React.FC<ScrollViewStackProps> = ({}) => {

    return (
        <Stack.Navigator screenOptions={{
            ...TransitionPresets.SlideFromRightIOS,
            gestureEnabled: true,
            headerLeftLabelVisible: false,
            headerMode: 'screen',
        }}>
            <Stack.Screen name="ScrollViewHome" component={ScrollViewHome} options={{
                headerTitle: 'ScrollView',
            }}/>
            <Stack.Group screenOptions={{
                headerTransparent: true,
                headerBackTitleVisible: false,
                headerTitle: '',
            }}>
                <Stack.Screen name="HorizontalAnimation" component={ScrollViewHorizontalAnimation}/>
            </Stack.Group>
        </Stack.Navigator>
    );

}

export default ScrollViewStack;