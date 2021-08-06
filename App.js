import React from 'react';
import SignScreen from './SignApp/App';
import MainScreen from './MainApp/App';


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLogin:false
    };
  }
  _changeLogin = () =>{
    this.setState(current=> ({isLogin : !current.isLogin}));
  }
  render(){
    const {isLogin} = this.state;
    return isLogin ? (
      <MainScreen changeLogin={this._changeLogin}/>
    ) : (
      <SignScreen changeLogin={this._changeLogin}/>
    );
  }
}