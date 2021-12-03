import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/explore/:id'>
            <Explore></Explore>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
