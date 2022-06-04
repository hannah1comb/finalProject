import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import NavBar from './Components/navBar';
import Home from './Components/home';
import Cities from './Components/cities';
import Hikes from './Components/hikes';

export default function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      {/* <Router forceRefresh={true}>       */}
      <Router>
        <div>
          <Switch>
            <Route path="/cities">
              <Cities />
            </Route>
            <Route path="/hikes">
              <Hikes />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

