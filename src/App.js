import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';

import Bar from './components/Bar';
import Pie from './components/Pie';
import Line from './components/Line';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/bar">Bar</Link>
              </li>
              <li>
                <Link to="/line">Line</Link>
              </li>
              <li>
                <Link to="/pie">Pie</Link>
              </li>
            </ul>
            <hr/>

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
