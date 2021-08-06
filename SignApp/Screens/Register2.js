import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import TopBar from '../Components/TopBar';
import CustomButton from '../Components/Button';
import Input from '../Components/Input';
import ProfileSvg from '../Components/user.svg';

export default function Register2({navigation}){
	return (
	<View style={styles.container}>
		<TopBar title="프로필"/>
		<View style={styles.circle}>
			<ProfileSvg  
				width={100}
                height={100}
                fill={"#ffffff"}/>
		</View>
		<View style={styles.inputBox}>
			<Input title="닉네임"/>
		</View>
		<View style={styles.buttonBox}>
			<CustomButton name="가입완료" bgColor="#78854f" ftColor="#ffffff" navigation={navigation} page="Complete"/>
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
	circle:{
		padding:30,
		borderRadius:100,
		backgroundColor:"#78854f",
		opacity:0.5,
		marginBottom:'10%',
	},
	inputBox:{
		width:"100%",
		alignItems: 'center',
		marginBottom:30,
	},
	buttonBox:{
		position:'absolute',
		alignItems: 'center',
		width:"100%",
		opacity:0.7,
		bottom:'15%',
	},

})