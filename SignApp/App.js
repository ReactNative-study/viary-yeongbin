import React from 'react';
import MainScreen from './Screens/Main';
import LoginScreen from './Screens/Login';
import CompleteScreen from './Screens/Complete';
import RegisterScreen from './Screens/Register1';
import RegisterScreen2 from './Screens/Register2';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="홈">
          <Stack.Screen
            name="홈"
            component={MainScreen}
            options={
              { headerShown: false }
            }/>
          <Stack.Screen 
            name="Login"
            options={
              { headerShown: false }
            }
          >
            {(props) => <LoginScreen {...props} changeLogin={this.props.changeLogin}/>}
          </Stack.Screen>
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={
              { headerShown: false }
            }/>
          <Stack.Screen
            name="Register2"
            component={RegisterScreen2}
            options={
              { headerShown: false }
            }
            />
          <Stack.Screen 
            name="Complete"
            options={
              { headerShown: false }
            }
          >
            {(props) => <CompleteScreen {...props} changeLogin={this.props.changeLogin}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}