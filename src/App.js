import React, { Component } from 'react'
import Header from './components/Header/index'
import RepositoriesList from './components/RepositoriesList/index'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RepositoriesList />
      </div>
    );
  }
}

export default App
