// The actual grid containerimport React, { Component } from "react";
import QuiltSquare from './QuiltSquare';
import './QuiltGrid.css';

class QuiltGrid extends Component {
  render() {
    const { rows, cols, tiles, tileSize, onTileClick } = this.props;

    return (
      <div className="quilt-grid-container">
        <div 
          className="quilt-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${cols}, ${tileSize}px)`,
            gap: '0',
            backgroundColor: '#1a1a1a',
            padding: '10px',
            borderRadius: '8px',
            width: 'fit-content',
            margin: '0 auto'
          }}
        >
          {tiles.map((color, index) => (
            <QuiltSquare
              key={index}
              color={color}
              size={tileSize}
              onClick={() => onTileClick(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default QuiltGrid;