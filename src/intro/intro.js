import './intro.css';
import logo from '../logo.svg';
import React from 'react';
import Button from '@material-ui/core/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

export default class Intro extends React.Component{
  render(){
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Мессенджер <strong>Atmosphere</strong></h2>
          <p>
            Новое поколение общения в сети на базе React.
          </p>
          <Button variant="contained" color="primary">
            <Link id='link-text' to='/auth'>Перейти в чат</Link>
        </Button>
        </header>
        <main>
            <h3>Инструкция по использованию</h3>
            <p>Тут должна быть инструкция</p>
        </main>
      </div>
    );
  }
}

