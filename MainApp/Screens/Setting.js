import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';

export default function Setting({navigation}){
	return (
	<View style={styles.container}>
		<TouchableOpacity style={{position:'absolute', left:'5%',top:'5%'}} onPress={()=>{navigation.goBack();}}>
			<Feather name="x" size={30} color="#78854f" />
		</TouchableOpacity>
		<Text>Setting</Text>
	</View>);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems:'center',
		backgroundColor:'#ffffff',
	},
})