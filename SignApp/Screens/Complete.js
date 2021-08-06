import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import TopBar from '../Components/TopBar';
import CustomButton from '../Components/Button';
import CheckSvg from '../Components/check.svg';

export default function Complete({changeLogin}){
	return (
	<View style={styles.container}>
		<TopBar title="프로필"/>
		<View>
			<View style={styles.circle}>
				<CheckSvg  
					width={100}
					height={100}
					fill={"#ffffff"}/>
			</View>
			<Text style={styles.circleText}>가입완료!</Text>
		</View>
		<View>
			<Text style={styles.text}>임영빈님!</Text>
			<Text style={styles.text}>viary의 회원이 되신걸 환영합니다</Text>
		</View>
		<View style={styles.buttonBox}>
			<CustomButton name="시작하기" bgColor="#78854f" ftColor="#ffffff" changeLogin={changeLogin}/>
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
	},
	circleText:{
		textAlign:'center',
		marginTop:'4%',
		marginBottom:'10%',
		fontSize:18,
		fontWeight:"700",
		color:"#78854f"
	},
	text:{
		textAlign:'center',
		marginBottom:3,
		fontSize:15,
		color:"#676767",
	},
	buttonBox:{
		position:'absolute',
		alignItems: 'center',
		width:"100%",
		opacity:0.7,
		bottom:'15%',
	},
})