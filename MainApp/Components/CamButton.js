import React from 'react';
import { StyleSheet , Image ,TouchableOpacity, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function CamButton(){
	return (
		<TouchableOpacity activeOpacity="0.7" onPress={()=>{Alert.alert("camera");}}>
            <LinearGradient colors={["#FFFFA0", "#E6F2D9"]} style={styles.circle}>
              <Image
                style={styles.logo}
                source={require('./logo.png')}
              />
            </LinearGradient>
          </TouchableOpacity>
		);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems:'center',
		backgroundColor:'#ffffff',
	},
	circle:{
		padding:10,
		borderRadius:35,
	},
	logo:{
		width:50,
		height:50,
		resizeMode:'contain',
	}
})