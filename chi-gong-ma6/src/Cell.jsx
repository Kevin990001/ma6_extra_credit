import React, { useState } from 'react';
import './Cell.css';
import { useGrid } from './GridContext';

const Cell = () => {
  const { handleCellToggle } = useGrid();
  const [isOn, setIsOn] = useState(false);

  const toggleCell = () => {
    setIsOn(prevIsOn => !prevIsOn);
    handleCellToggle(!isOn); 
  };

  return (
    <div className={`cell ${isOn ? 'on' : ''}`} onClick={toggleCell}></div>
  );
};

export default Cell;




