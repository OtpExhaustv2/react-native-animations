import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AppParamsList } from "./AppParamsList";
import { HomeStack } from "./Home";

interface AppStackProps {}

const Stack = createStackNavigator<AppParamsList>();

const AppStack: React.FC<AppStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  );
};

export default AppStack;
