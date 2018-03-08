import React, { Component } from 'react';
import './App.css';
import Movie from "./components/movie.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie />
      </div>
    );
  }
}

export default App;
