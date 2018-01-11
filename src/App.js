import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import {Router,Route,Switch} from 'react-router';
import {BrowserRouter, Route,Router,HashRouter,Link,Switch} from 'react-router-dom';
// import {Link} from 'react-router-dom';

import Hello from './Hello';
import Compo1 from './Compo1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
            <li><Link to="/hello">hello</Link></li>
            <li><Link to="/compo1">compo1</Link></li>
        </ul>
          <div>
              <Switch>
                  <Route exact path='/' component={App}/>
                  <Route path='/hello' component={Hello}/>
                  <Route path='/compo1' component={Compo1}/>
              </Switch>
          </div>
      </div>
    );
  }
}

export default App;
