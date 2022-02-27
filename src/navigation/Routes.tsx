import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {AppStack} from "./App";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = ({}) => {
    
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    );

}

export default Routes;