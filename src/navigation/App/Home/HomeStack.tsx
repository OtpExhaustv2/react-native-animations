import React from "react";
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";
import {HomeParamsList} from "./HomeParamsList";
import {HomeScreen} from "../../../concepts";
import {AnimationsStack} from "../Animations";
import {FlatListStack} from "../FlatList";
import {PanGestureHandlerStack} from "../PanGestureHandler";
import {PinchGestureHandlerStack} from "../PinchGestureHandler";
import {ScrollViewStack} from "../ScrollView";

interface HomeStackProps {
}

const Stack = createStackNavigator<HomeParamsList>();
const HomeStack: React.FC<HomeStackProps> = ({}) => {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
                gestureEnabled: true,
                headerLeftLabelVisible: false,
                headerMode: "screen",
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Group
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="PinchGestureHandler"
                    component={PinchGestureHandlerStack}
                />
                <Stack.Screen name="ScrollView" component={ScrollViewStack}/>
                <Stack.Screen
                    name="PanGestureHandler"
                    component={PanGestureHandlerStack}
                />
                <Stack.Screen name="Animations" component={AnimationsStack}/>
                <Stack.Screen name="FlatList" component={FlatListStack}/>
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default HomeStack;
