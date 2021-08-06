import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';
import TopBar from '../Components/TopBar';
import CustomButton from '../Components/Button';
import Input from '../Components/Input';

export default function Login(props){
	return (
	<View style={styles.container}>
		<TopBar title="로그인"/>
		<View style={styles.logoBox}>
          <Image
            style={styles.logo}
            source={require('../Components/logo.png')}
          />
        </View>
		<View style={styles.inputBox}>
			<Input title="아이디"/>
			<Input title="비밀번호"/>
		</View>
		<View style={styles.textBox}>
			<Text style={{marginRight:4,fontSize:16,color:"#676767"}}>아직 회원이 아니신가요?</Text>
			<TouchableHighlight onPress={()=>props.navigation.navigate('Register')} underlayColor="none">
				<Text style={{color:"#78854F",fontSize:16,fontWeight:"700"}}>회원가입</Text>
			</TouchableHighlight>
		</View>
		<View style={styles.buttonBox}>
			<CustomButton name="로그인" bgColor="#78854f" ftColor="#ffffff" changeLogin={props.changeLogin}/>
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
	logoBox:{
		alignItems: 'center',
		opacity:0.7,
		marginBottom:'10%',
	},
	logo:{
		height:110,
		resizeMode:'contain',
	},
	inputBox:{
		width:"100%",
		alignItems: 'center',
	},
	textBox:{
		flexDirection:'row',
		justifyContent: 'center',
		alignItems:'center',
		marginTop:'2%',
		marginBottom:'20%',
	},
	buttonBox:{
		position:'absolute',
		alignItems: 'center',
		width:"100%",
		opacity:0.7,
		bottom:'15%',
	},
})