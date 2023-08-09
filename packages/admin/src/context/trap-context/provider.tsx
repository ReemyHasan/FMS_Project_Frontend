import React, { useState } from 'react';
import DataContext from './index';

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]); // Your initial data state

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;