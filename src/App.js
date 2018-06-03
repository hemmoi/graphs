import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Bar from './components/Bar';
import Pie from './components/Pie';
import Line from './components/Line';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Router>
          <div>
            <Route exact path="/" component={Bar}/>
            <Route path="/bar" component={Bar}/>
            <Route path="/line" component={Line}/>
            <Route path="/pie" component={Pie}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
