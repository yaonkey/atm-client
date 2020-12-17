import './settings.css';
import HeaderApp from '../header/header.js';
import React from 'react';
import Button from '@material-ui/core/Button';


export default class Settings extends React.Component{
  render(){
    return (
      <div className="Auth">
      <HeaderApp/>
      <div id='auth-form'>
        <h2>Настройки</h2>
        <form method='POST'>
          <ul>
            <li>
              <label>
                Изменить логин => 
                <input type="text" name="login" />
              </label>
            </li>
            <li>
              <label>
                Изменить пароль=> 
                <input type="text" name="password" />
              </label>
            </li>
            <li>
                <label>
                    Тема оформления:
                </label>
                <ul>
                    <li>
                        <label>Светлая
                        <input type="radio" id="light-theme" name="theme" value="light" checked />
                        </label>
                    </li>
                    <li>
                        <label>Темная
                        <input type="radio" id="dark-theme" name="theme" value="dark" />
                        </label>
                    </li>
                </ul>

            </li>
            <li>
                [Тут должны быть еще пункты с настройками.]
            </li>
            <li>
              <input type="submit" value="Сохранить" />
            </li>
          </ul>
        </form>
      </div>
    </div>
    );
  }
}

