import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Intro from './intro/intro.js';
import Button from '@material-ui/core/Button';
import Auth from './auth/auth.js';
import Settings from './settings/settings.js';
import Chat from './chat/chat.js';

export default class App extends React.Component {
  render(){
  return (
    <div>
       <Route exact path="/" component={Intro} />
      <Route exact path="/auth" component={Auth} /> 
      <Route exact path="/chat" component={Chat} /> 
      <Route exact path="/settings" component={Settings} /> 
    </div>
      


    
  );
}
}


