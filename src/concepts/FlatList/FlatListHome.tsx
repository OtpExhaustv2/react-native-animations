import React from 'react';
import { ScrollView } from 'react-native';
import { FlatListStackNavProps } from '../../navigation/App';
import Card from '../../shared/Card';

interface FlatListHomeProps extends FlatListStackNavProps<'FlatListHome'> {}

const FlatListHome: React.FC<FlatListHomeProps> = ({ navigation }) => {
	return (
		<ScrollView
			style={{ flex: 1 }}
			contentContainerStyle={{ alignItems: 'center' }}>
			<Card
				text='Parallax Carousel'
				onPress={() => {
					navigation.push('ParallaxCarousel');
				}}
			/>
			<Card
				text='Timer'
				onPress={() => {
					navigation.push('Timer');
				}}
			/>
			<Card
				text='Colorful Carousel'
				onPress={() => {
					navigation.push('ColorfulCarousel');
				}}
			/>
			<Card
				text='Picker'
				onPress={() => {
					navigation.push('Picker');
				}}
			/>
		</ScrollView>
	);
};

export default FlatListHome;
