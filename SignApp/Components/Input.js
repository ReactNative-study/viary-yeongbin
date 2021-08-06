import React from 'react';
import { StyleSheet, TextInput} from 'react-native';

export default function Input({title}){
	return (
		<TextInput
			placeholder={title}
			maxLength={30}
			style={styles.input}
		/>
	);
}

const styles = StyleSheet.create({
  input: {
	width:"80%",
	padding:22,
	marginBottom:8,
	marginTop:8,
	borderRadius:10,
	borderColor:"#e0e0e0",
	borderWidth:0.5,
  },
});
