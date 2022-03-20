import React from 'react';
import { ScrollView } from 'react-native';
import { PinchGestureHandlerStackNavProps } from '../../navigation/App';
import Card from '../../shared/Card';

interface PinchGestureHandlerHomeProps
	extends PinchGestureHandlerStackNavProps<'PinchGestureHandlerHome'> {}

const PinchGestureHandlerHome: React.FC<PinchGestureHandlerHomeProps> = ({
	navigation,
}) => {
	return (
		<ScrollView
			style={{ flex: 1 }}
			contentContainerStyle={{ alignItems: 'center' }}>
			<Card
				text='PinchGestureHandlerBasics'
				onPress={() => {
					navigation.push('Basics');
				}}
			/>
		</ScrollView>
	);
};

export default PinchGestureHandlerHome;
