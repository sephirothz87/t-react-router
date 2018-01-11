import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Route,Link,Switch} from 'react-router-dom';

import Hello from './Hello';
import Compo1 from './Compo1';

//有时候会卡住，node那边也没有提示
//这种时候先把用到router的地方都删掉，然后循序渐进的添加可解

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
