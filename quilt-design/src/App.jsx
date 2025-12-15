import React, { Component } from "react";
import './App.css';
import Header from './components/Header';
import DimensionInput from './components/DimensionInput'
import ControlButton from './components/ControlButton'
import QuiltGrid from "./components/QuiltGrid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 4,
      cols: 4,
      tiles: this.initializeTiles(4, 4),
      selectedColor: '#7759BD'
    };
  }

  // Initialize tiles
  initializeTiles(rows, cols) {
    return Array(rows * cols).fill('#7759BD');
  }
  handleColsChange = (cols) => {
    this.setState({
      cols,
      tiles: this.initializeTiles(this.state.rows, cols) 
    });
  }

  handleRowsChange = (rows) => {
    this.setState({
      rows,
      tiles: this.initializeTiles(rows, this.state.cols) 
    });
  }

  handleRemoveCol = () => {
    const { rows, cols, tiles} = this.state;
    if (cols > 1){
      const newTiles = [];
      for (let i = 0; i < rows ; i++)
      {
        for (let j = 0; j < cols; j++)
        {
          newTiles.push(tiles[i * cols + j]);
        }
      }

      this.setState({
        cols: cols - 1,
        tiles: newTiles,
      });
    }
  };

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
    if (rows < 10){
      const newTiles = [...tiles];
      for (let i = 0; i < cols; i++) {
      newTiles.push('#8b7ab8');
    }
    this.setState({
    rows: rows + 1,
    tiles: newTiles
    });
    }
  }


  handleAddCol = () => {
    const { rows, cols, tiles} = this.state;
    if (cols < 10){
      const newTiles = [];
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          newTiles.push(tiles[i * cols + j]);
        }
        newTiles.push('#8b7ab8');
      }
      this.setState({
        cols: cols + 1,
        tiles: newTiles
      });
  }
}
  handleTileClick = (index) => {
      const newTiles = [...this.state.tiles];
      newTiles[index] = this.state.selectedColor;
      this.setState({ tiles: newTiles });
  }

  render() {
    const { rows, cols, tiles, selectedColor } = this.state;
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

        <div className="dimension-inputs">
          <DimensionInput 
                value={this.state.rows} 
                onChange={this.handleRowsChange}
              />
          <DimensionInput 
                value={this.state.cols} 
                onChange={this.handleColsChange}
              />
           <ControlButton 
            label="GO!" 
            isPrimary={true}
            onClick={() => this.setState({ 
              tiles: this.initializeTiles(rows, cols) 
            })}
          />
        </div>

        <div className="build-footer">
          or build as you go ...
        </div>
        <div className="color-picker">
          <label>Select Color: </label>
          <input
            type="color"
            value={this.state.selectedColor}
            onChange={(e) => this.setState({ selectedColor: e.target.value })}
          />
        </div>
               <QuiltGrid
          rows={rows}
          cols={cols}
          tiles={tiles}
          tileSize={tileSize}
          onTileClick={this.handleTileClick}
        />
        <div className="controls">
          <div>
            <ControlButton label="+ Row" onClick={this.handleAddRow} />
            <ControlButton label="- Row" onClick={this.handleRemoveRow} disabled={rows <= 1} />
          </div>
          <div>
            <ControlButton label="+ Col" onClick={this.handleAddCol} />
            <ControlButton label="- Col" onClick={this.handleRemoveCol} disabled={cols <= 1} />
          </div>
        </div>
        <div className="export">
          <button
            onClick={this.handleExport}
            className="export-button"
          >
            Save/Export Your Design to Bring it to Life Later!
          </button>
        </div>
      </div>
    );
  }
}

export default App;
