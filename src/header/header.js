import React from 'react';
import './header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
  import Button from '@material-ui/core/Button';
import Intro from '../intro/intro.js';

const HeaderApp = () => (
    
        <header id='header'>
            <nav>
                <Button id='def-but' variant="contained" color="primary">
                    <Link id='link-text' to="/">Домой</Link>
                </Button> 
                <Button id='def-but' variant="contained" color="primary">
                    <Link id='link-text' to="/chat">Чат</Link>
                </Button>
                <Button id='def-but' variant="contained" color="primary">
                    <Link id='link-text' to="/settings">Настройки</Link>
                </Button>
                <Button id='def-but-right' variant="contained" color="red">
                    <Link id='link-text' to="/exit">Выход</Link>
                </Button> 
            </nav>
        </header>
);

export default HeaderApp;