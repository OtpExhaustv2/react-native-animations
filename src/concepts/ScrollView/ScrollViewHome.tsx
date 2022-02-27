import React from 'react';
import {View} from "react-native";
import Card from "../../shared/Card";
import {ScrollViewStackNavProps} from "../../navigation/App/ScrollView";

interface ScrollViewHomeProps extends ScrollViewStackNavProps<'ScrollViewHome'> {
}

const ScrollViewHome: React.FC<ScrollViewHomeProps> = ({navigation}) => {

    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <Card text="Horizontal Animation" onPress={() => {
                navigation.push('HorizontalAnimation');
            }}/>
        </View>
    );

}

export default ScrollViewHome;