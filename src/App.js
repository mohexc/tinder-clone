import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.less';
import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';
import TinderCards from './components/TinderCards';

// Main component
const App = () => {

  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/chat">
            <h1>I am the chatPage</h1>
          </Route>
          <Route path="/">
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>

    </React.Fragment>
  )
}

export default App;