/*
*переделать приложение на компоненты
*сделать переключение экранов
-прогирывание файла при старте игры



*/
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './components/Main';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Menu />
        </Route>
        <Route path="/main/:year?" component={Main} />
        <Route path=""> 
              <Link to="/">Go to main page</Link>
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}
export default App;
