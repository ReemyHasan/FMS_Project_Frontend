import axios from "axios";
import {TrapURL} from "../data/constant/app-constant";
export const fetchData = async () => {
  try {
    const response = await axios.get(TrapURL);
    if (response.data) {
      const transformedData = response.data.map((item:any) => ({
        id: item.id,
        timestamp: item.timestamp,
        agentAddress: item.agentAddress,
        severity: item.severity,
        specificTrap: item.specificTrap,
        genericTrap: item.genericTrap,
        variableBindings: item.variableBindings,
      }));
      return transformedData;
    } else {
      alert("Error");
    }
  } catch (error) {
    console.log(error);
  }
};