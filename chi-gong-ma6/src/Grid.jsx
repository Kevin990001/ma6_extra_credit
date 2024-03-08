import React from 'react';
import Cell from './Cell';
import { useGrid } from './GridContext';

const Grid = () => {
  const { onCount } = useGrid();

  return (
    <div>
      <h2>Number of Cells On: {onCount}</h2>
      <div className="grid">
        <div className="row">
          <Cell />
          <Cell />
        </div>
        <div className="row">
          <Cell />
          <Cell />
        </div>
      </div>
    </div>
  );
};

export default Grid;



