import React, { createContext, useContext, useState } from 'react';

const GridContext = createContext();

export const useGrid = () => useContext(GridContext);

export const GridProvider = ({ children }) => {
  const [onCount, setOnCount] = useState(0);

  const handleCellToggle = (isOn) => {
    setOnCount(prevCount => {
      if (isOn && prevCount < 4) {
        return prevCount + 1;
      } else if (!isOn && prevCount > 0) {
        return prevCount - 1;
      }
      return prevCount;
    });
  };

  return (
    <GridContext.Provider value={{ onCount, handleCellToggle }}>
      {children}
    </GridContext.Provider>
  );
};



