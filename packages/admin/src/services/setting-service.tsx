import axios from "axios";
import {SettingURL} from "../data/constant/app-constant";
export const fetchAboutSettingData = async (token:any,role:any) => {
  try {

    const response = await axios.get(SettingURL+"/data",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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

export const putAboutSettingData = async (data:any,token:any,role:any) => {
  if(role=="admin"){
    try {
      const response = await axios.post(SettingURL+"/post",data,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
  };

  export const deleteByKeyAboutSettingData = async (key:any,token:any,role:any) => {
    if(role=="admin"){
    try {
      const response = await axios.delete(SettingURL+`/delete/${key}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
  };

  export const UpdateAboutSettingData = async (data:any,token:any,role:any) => {
    if(role=="admin"){
    try {
      const response = await axios.put(SettingURL+`/update`, data,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  };

  export const sendEmailMessage = async (data:any,token:any,role:any) => {
    try {
      const response = await axios.post(SettingURL+`/send-message`, data,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  };