import React, { Component } from 'react';
import Header from './components/Header/index';
import Main from './components/Main/index';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ReactCSSTransitionGroup transitionName={{enter: 'enter', leave: 'leave', appear: 'appear'}} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          <Main />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
