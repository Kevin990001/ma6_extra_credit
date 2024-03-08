import React, { useState } from 'react';
import './Cell.css';
import { useGrid } from './GridContext';

const Cell = () => {
  const { handleCellToggle } = useGrid();
  const [isOn, setIsOn] = useState(false);

  const toggleCell = () => {
    setIsOn(prevIsOn => !prevIsOn);
    handleCellToggle(!isOn); // Toggle the cell and inform the Grid component
  };

  return (
    <div className={`cell ${isOn ? 'on' : ''}`} onClick={toggleCell}></div>
  );
};

export default Cell;




