import React from 'react';
import { StyleSheet , View, Text,TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Header({navigation}){
	return (
		<View style={styles.header}>
			<Text style={styles.title}>viary</Text>
			<TouchableOpacity style={styles.menu} onPress={()=>{navigation.openDrawer();}}>
				<MaterialCommunityIcons name="menu" size={30} color="#3b5217"/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	header:{
		backgroundColor:"#78854f",
		paddingTop:40,
		paddingBottom:20,
		justifyContent:'center',
		alignItems:'center',
		borderBottomRightRadius:50,
		borderBottomLeftRadius:50,
		position:"relative",
	},
	title:{
		color:"#ffffff",
		fontSize:21,
		fontWeight:"600",
	},
	menu:{
		position:"absolute",
		left:25,
		bottom:15,
	},
})