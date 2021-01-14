import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Header from '../components/Header';

//import { prefix } from '../utils/constants';

const BookScreen = () => {
	return (
		<View style={styles.container}>
			<Text>BookScreen</Text>
			<Header />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#000',
		paddingBottom: 20,
		marginTop: Constants.statusBarHeight
	}
});

export default BookScreen;
