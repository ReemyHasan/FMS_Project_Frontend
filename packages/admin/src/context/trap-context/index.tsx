import { createContext } from "react";

const DataContext = createContext({
  data: [],
  setData: (values:any) => {},
});

export default DataContext;