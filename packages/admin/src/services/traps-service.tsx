import axios from "axios";
import {TrapURL} from "../data/constant/app-constant";
export const fetchData = async (token:any) => {
  try {
    const response = await axios.get(TrapURL+"/data",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
export const getSeverityStatistics = async (token:any) => {
  try {
    const response = await axios.get(TrapURL+ "/severity-statistics",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTrapsCount = async (token:any) => {
  try {
    const response = await axios.get(TrapURL+ "/getTrapCount",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getErrorTrapCount = async (token:any) => {
  try {
    const response = await axios.get(TrapURL+ "/getErrorTrapCount",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWarningTrapCount = async (token:any) => {
  try {
    const response = await axios.get(TrapURL+ "/getWarningTrapCount",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getInfoTrapCount = async (token:any) => {
  try {
    const response = await axios.get(TrapURL+ "/getInfoTrapCount",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};