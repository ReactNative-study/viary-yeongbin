import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import CamButton from '../Components/CamButton';

export default function Today(){
	return (
	<View style={styles.container}>
		<Text>Today</Text>
		<View style={styles.camButton}>
			<CamButton/>
		</View>
	</View>);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems:'center',
		backgroundColor:'#ffffff',
	},
	camButton:{
		position:'absolute',
		right:15,
		bottom:40,
	}
})