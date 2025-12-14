import React, { Component } from "react";
import './App.css';
import Header from './components/Header';
import DimensionInput from './components/DimensionInput'

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
  handleColsChange = (cols) => {
    this.setState({
      cols,
      tiles: this.initializeTiles(rows, this.state.cols)
    })
  }

  handleRowsChange = (rows) => {
    this.setState({
      rows,
      tiles: this.initializeTiles(this.state.rows, cols)
    })
  }

  handleRemoveCol = () => {
    const { rows, cols, tiles} = this.state;
    if (cols > 1){
      const newTiles = [];
      for (let i = 0; i < rows ; i++);
      {
        for (let j = 0; j < cols; j++);
        {
          newTiles.push(tiles[i * cols + j])
        }
      }

      this.setState({
        cols: cols - 1,
        tiles: newTiles
      })
    }
  }

  handleRemoveRow = () => {
    const { cols, rows, tiles } = this.state;
    if (rows > 1){
      const newTiles = tiles.slice(0, -cols);
      this.setState({
        rows: rows - 1,
        tiles: newTiles
      });
    }
  }


  handleAddRow = () => {
    const { rows, cols, tiles} = this.state;
  }


  handleAddCol = () => {
    const { rows, cols, tiles} = this.state;
  }

  render() {
    const { rows, cols, tiles } = this.state;
    const tileSize = Math.min(400 / Math.max(rows, cols), 100);

    return (
      <div className="App">
        <Header />
        <div className="heading">
        Re-purpose your fabrics into a meaningful, memorable quilt
        </div>
          <div className="choose-header">
          choose your dimensions
        </div>
  
        <DimensionInput 
                value={this.state.rows} 
                onChange={this.handleRowsChange}
              />
        <DimensionInput 
                value={this.state.cols} 
                onChange={this.handleColsChange}
              />

        <div className="build-footer">
          or build as you go ...
        </div>
      </div>
    );
  }
}

export default App;
