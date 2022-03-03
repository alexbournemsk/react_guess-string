import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './components/Main';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/menu" exact>
          <Menu />
        </Route>
        <Route path="/main" exact component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
