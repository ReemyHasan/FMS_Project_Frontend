import { createContext } from "react";

const DataContext = createContext({
  data: [],
  setData: () => {},
  websocket: null,
  new_val:null,
  setNewVal: (newVal:any) => {},
});

export default DataContext;