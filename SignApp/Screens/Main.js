import React from 'react';
import { LayoutAnimation, StyleSheet, Text, View,Image,Button} from 'react-native';
import CustomButton from '../Components/Button'
import { LinearGradient } from 'expo-linear-gradient';

export default class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isload:false,
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isload:true});
    },1000)
  }
  render(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    return (
      <LinearGradient colors={["#FFFFA0", "#E6F2D9"]} style={styles.container}>
        <View style={styles.logoBox}>
          <Image
            style={styles.logo}
            source={require('../Components/logo.png')}
          />
          <Text style={styles.text}>viary</Text>
        </View>
        {this.state.isload && 
          (<View style={styles.buttonBox} >
            <CustomButton name="로그인" bgColor="#fcfff7" ftColor="#78854f" navigation={this.props.navigation} page="Login"/>
            <CustomButton name="회원가입" bgColor="#fcfff7" ftColor="#78854f" navigation={this.props.navigation} page="Register"/>
          </View>)
        }      
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonBox:{
    alignItems: 'center',
    marginTop:25,
    width:"100%",
  },
  logoBox:{
    alignItems: 'center',
  },
  logo:{
    width:"33%",
    height:140,
    resizeMode:'contain',
  },
  text:{
	  fontSize:40,
	  color:"#78854F",
	  fontWeight:"600",
  },
});
