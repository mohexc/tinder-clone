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
        <Switch>
          <Route path="/chat">
            <Header backButton="/" />
            <h1>I am the chatPage</h1>
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>

    </React.Fragment>
  )
}

export default App;