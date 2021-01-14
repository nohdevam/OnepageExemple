import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//import { prefix } from '../utils/constants';

const Header = () => {
	// destructuration du styles
	const { container, closeIcon, cartIcon } = styles;
	return (
		<View style={container}>
			{/*<Ionicons name={`${prefix}-close-circle-outline`} size={40} />
			<Ionicons name={`${prefix}-cart`} size={40} />*/}
			<MaterialCommunityIcons style={closeIcon} name="close-circle-outline" />
			<MaterialCommunityIcons style={cartIcon} name="cart-outline" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%'
		//alignItems: 'center'
	},
	closeIcon: {
		fontSize: 45,
		color: '#fff'
	},
	cartIcon: {
		fontSize: 40,
		color: '#fff'
	}
});

export default Header;
