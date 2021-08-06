import React from 'react';
import { StyleSheet , View, Text} from 'react-native';

export default function ImageBox(){
	return (
		<View style={styles.box}>
			<Text style={{color:"white"}}>hihi</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	box: {
		backgroundColor:'#444444',
		padding:10,
		height:200,
		width:"80%",
		marginVertical:10,
	},
})