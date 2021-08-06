import React from 'react';
import { ScrollView,View, Text, StyleSheet} from 'react-native';
import CamButton from '../Components/CamButton';
import ImageBox from '../Components/ImageBox';

export default function Main(){
	return (
	<View style={styles.container}>
		<ScrollView>
			<View style={styles.scroll}>
				<ImageBox/>
				<ImageBox/>
				<ImageBox/>
				<ImageBox/>
				<ImageBox/>
				<ImageBox/>
				<ImageBox/>
				<ImageBox/>
				<ImageBox/>
				<ImageBox/>
				<ImageBox/>
			</View>
		</ScrollView>
		<View style={styles.camButton}>
			<CamButton/>
		</View>
	</View>);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:"#ffffff",
	},
	camButton:{
		position:'absolute',
		right:15,
		bottom:40,
	},
	scroll:{
		alignItems:'center',
		marginTop:10
	}
})