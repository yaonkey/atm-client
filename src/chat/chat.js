import './chat.css';
import HeaderApp from '../header/header.js';
import React from 'react';
import Button from '@material-ui/core/Button';


export default class Chat extends React.Component{
  render(){
    return (
      <div className="Auth">
      <HeaderApp/>
      <div id='auth-form'>
        <h2>Чат</h2>
        <form method='POST'>
          <ul>
            <li>
              <label>
                Логин => 
                <input type="text" name="login" />
              </label>
            </li>
            <li>
              <label>
                Пароль=> 
                <input type="text" name="password" />
              </label>
            </li>
            <li>
              <input type="submit" value="Войти" />
            </li>
          </ul>
        </form>
      </div>
    </div>
    );
  }
}

