import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Button(props){
	return (
		<TouchableOpacity 
			onPress={() => {
				props.changeLogin == undefined ? props.navigation.navigate(props.page) : props.changeLogin();
			}}
			style={[styles.button,{backgroundColor:props.bgColor}]}
			activeOpacity="0.8"
		>
			<Text style={[styles.text,{color:props.ftColor}]}>{props.name}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
  button: {
	width:"80%",
	textAlign:"center",
	padding:22,
	marginBottom:8,
	marginTop:8,
	borderRadius:100,
	borderColor:"#e0e0e0",
	borderWidth:0.5,
  },
  text:{
	fontSize:16, 
	textAlign:"center", 
	fontWeight:"600",
  }
});
