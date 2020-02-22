import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';
import Filter from './components/filter';
import Header from './components/header';


class App extends Component {
  render() {
    return <div className="header">
    <Header />
    

    <div id="App">

<div className="filter">
    
      <Filter />
      </div>
      <div className="layout">
        <Layout />
      </div>
    </div>
    </div>
  }
}

export default App;