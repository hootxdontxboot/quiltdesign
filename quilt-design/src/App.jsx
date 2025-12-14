import React, { Component } from "react";
import './App.css';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 4,
      cols: 4,
      tiles: this.initializeTiles(4, 4),
    };
  }

  // Initialize tiles
  initializeTiles(rows, cols) {
    return Array(rows * cols).fill('#7759BD');
  }

  render() {
    const { rows, cols, tiles } = this.state;
    const tileSize = Math.min(400 / Math.max(rows, cols), 100);

    return (
      <div className="App">
        <Header />
        {/* Your content here */}
      </div>
    );
  }
}

export default App;
