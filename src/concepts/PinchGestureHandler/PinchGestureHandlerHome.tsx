import React from 'react';
import {View} from "react-native";
import {PinchGestureHandlerStackNavProps} from "../../navigation/App/PinchGestureHandler/PinchGestureHandlerParamsList";
import Card from "../../shared/Card";

interface PinchGestureHandlerHomeProps extends PinchGestureHandlerStackNavProps<'PinchGestureHandlerHome'> {
}

const PinchGestureHandlerHome: React.FC<PinchGestureHandlerHomeProps> = ({navigation}) => {

    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <Card text="PinchGestureHandlerBasics" onPress={() => {
                navigation.push('Basics');
            }}/>
        </View>
    );

}

export default PinchGestureHandlerHome;