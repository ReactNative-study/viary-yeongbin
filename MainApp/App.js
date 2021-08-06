import React from 'react';
import { Alert, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';
import MainScreen from "./Screens/Main";
import CalendarScreen from "./Screens/CalendarScreen";
import TodayScreen from "./Screens/Today";
import CategoryScreen from "./Screens/Category";
import Menu from './Screens/Menu';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import Setting from './Screens/Setting';
import Header from './Components/Header';

function Root({navigation}){
  const Tab = createBottomTabNavigator();
  return(
  <View style={styles.container}>
    <Header navigation={navigation}/>
    <Tab.Navigator
      initialRouteName="Main"
      tabBarOptions={{
        activeTintColor: '#78854f',
        inactiveTintColor: '#c5c5c5',
        style:{backgroundColor:"#FBFFF7",marginBottom:5}
    }}>
      <Tab.Screen 
        name="Main" 
        component={MainScreen}
        options={{
          tabBarLabel:'Main',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}/>
      <Tab.Screen 
        name="Today" 
        component={TodayScreen}
        options={{
          tabBarLabel:'Today',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pencil" color={color} size={size} />
          )
        }}/>
      <Tab.Screen 
          name="Calendar"
          component={CalendarScreen} 
          options={{
            tabBarLabel:'Calendar',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar" color={color} size={size} />
            ),
        }}/>
      <Tab.Screen 
          name="Category"
          component={CategoryScreen} 
          options={{
            tabBarLabel:'Category',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="image-album" color={color} size={size} />
            ),
        }}/>
    </Tab.Navigator>
  </View>);
}

export default class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const Drawer = createDrawerNavigator();
    
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerType={'front'}
          drawerStyle={{
            width: '90%',
            paddingTop: '10%',
          }}
          drawerContent={props => <Menu {...props} {...this.props}/>}
          drawerContentOptions={{
            activeTintColor:'#78854f',
          }}
        >
          <Drawer.Screen 
            name="Root"
            component={Root}
            options={{
              
              swipeEnabled: false,
              drawerLabel:'home',
              drawerIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              )
            }}
            />
          <Drawer.Screen 
            name="Setting" 
            component={Setting}
            options={{
              drawerLabel:'settings',
              drawerIcon: ({ color, size }) => (
                <Ionicons name="settings" color={color} size={size} />
              )
            }}
            />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  menu:{
    height:10,
  }
});
