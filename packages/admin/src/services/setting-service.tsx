import axios from "axios";
import {SettingURL} from "../data/constant/app-constant";
export const fetchAboutSettingData = async () => {
  try {
    const response = await axios.get(SettingURL+"/data");
    if (response.data) {
      const data = response.data.map((item:any) => ({
        id: item.id,
        key: item.key,
        value: item.value,
      }));
      return data;
    } else {
      alert("Error");
    }
  } catch (error) {
    console.log(error);
  }
};

export const putAboutSettingData = async (data:any) => {
    try {
      const response = await axios.post(SettingURL+"/post",data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  export const deleteByKeyAboutSettingData = async (key:any) => {
    try {
      const response = await axios.delete(SettingURL+`/delete/${key}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  export const UpdateAboutSettingData = async (data:any) => {
    try {
      const response = await axios.put(SettingURL+`/update`, data);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  export const sendEmailMessage = async (data:any) => {
    try {
      const response = await axios.post(SettingURL+`/send-message`, data);
      return response.data;
    } catch (error) {
      return error;
    }
  };