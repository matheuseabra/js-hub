import React, { Component } from 'react'
import Header from './components/Header/index'
import RepositoriesList from './components/RepositoriesList/index'
import './App.css'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <RepositoriesList />
      </React.Fragment>
    );
  }
}

export default App
