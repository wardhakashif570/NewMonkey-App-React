import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import NewsComponent from './Components/News';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <NewsComponent />
      </div>
    )
  }
}

export default App;

