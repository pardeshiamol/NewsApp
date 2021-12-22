import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
    render() {
    return (
      <div>
        <Navbar />
        <News />
      </div>
    )
  }
}


// 950cebd1522546c098dea27ea833d5da