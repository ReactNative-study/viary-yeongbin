import React from 'react';
import { View, Text, StyleSheet, Alert ,TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';
import ProfileSvg from '../Components/user.svg';
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
  } from '@react-navigation/drawer';


export default function Menu(props){
	return (
		<View style={{flex:1}}>
			<View style={styles.imgBox}>
				<TouchableOpacity style={{alignSelf:'flex-end', marginRight:'5%'}} onPress={()=>{props.navigation.closeDrawer();}}>
					<AntDesign name="arrowleft" size={30} color="#78854f" />
				</TouchableOpacity>
				<View style={styles.circle}>
					<ProfileSvg  
					width={80}
					height={80}
					fill={"#ffffff"}/>
				</View>
				<Text style={{fontSize:21, color:'#78854f'}}>임영빈</Text>
				<TouchableOpacity style={styles.edit} onPress={()=>{Alert.alert('수정페이지')}}>
					<Text style={{fontSize:9,color:'white'}}>EDIT</Text>
				</TouchableOpacity>
			</View>
			<DrawerContentScrollView {...props}>
				<DrawerItemList {...props} />
				<DrawerItem label="Help" onPress={() => {Alert.alert('help')}}
					icon={({color, size}) => (
					<AntDesign name="questioncircle" color={color} size={size} />
				)} />
				<DrawerItem label="Logout" onPress={() => {props.changeLogin();}} 
					icon={({color, size}) => (
					<MaterialCommunityIcons name="logout" color={color} size={size} />
				)} />
			</DrawerContentScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	imgBox: {
		justifyContent:'center',
		alignItems:'center',
		position:'relative',
		paddingBottom:'5%',
	},
	circle:{
		padding:30,
		borderRadius:100,
		backgroundColor:"#78854f",
		opacity:0.5,
		marginTop:'15%',
		marginBottom:'5%',
	},
	edit:{
		padding:7,
		paddingHorizontal:15,
		borderRadius:5,
		position:'absolute',
		right:10,
		bottom:5,
		backgroundColor:'#78854f',
	}
})