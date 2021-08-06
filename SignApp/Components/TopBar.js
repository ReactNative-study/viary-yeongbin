import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function TopBar({title}){
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		position:"absolute",
		top:'5%',
		width:"80%",
		borderBottomColor:"#78854f",
		padding:20,
		borderBottomWidth:0.5,
	},
	text:{
		color:"#78854f",
		fontSize:18,
		textAlign:"center",
		fontWeight:"600",
	}
});
