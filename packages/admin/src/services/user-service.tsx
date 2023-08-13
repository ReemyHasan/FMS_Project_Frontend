import axios from "axios";
import { UserURL,AuthURL } from "../data/constant/app-constant";
import { message } from "antd";
import MainUtils from "../utils/main";

export const login = async (data: any) => {
  try {
    const values = MainUtils.cloneObject(data);
    const response = await axios.post(AuthURL+"token", values);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (data:any,token:any,role:any) => {
  if(role=="admin"){
    try {
      const response = await axios.post(UserURL+"register",data
        ,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
     return error;
    }
  }
  };


export const getUserInfo = async (data: any, token:any) => {
    try {
      const response = await axios.get(UserURL + `get/${data}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      message.error("Error: " + error);
    }
  };
  
export const getAllUsers = async (token:any, role:any) => {
  if(role=="admin"){
  try {
    const response = await axios.get(UserURL + `getAllUsers`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    message.error("Error: " + error);
  }
}
};

export const getAdminsCount = async (token:any, role:any) => {
  if(role=="admin"){
  try {
    const response = await axios.get(UserURL + `getAdminCount`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    message.error("Error: " + error);
  }
}
};
export const getUsersCount = async (token:any, role:any) => {
  if(role=="admin"){
  try {
    const response = await axios.get(UserURL + `getUsersCount`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    message.error("Error: " + error);
  }
}
};

export const deleteUser = async (id: any, token:any,role:any) => {
  if(role=="admin"){
  try {
    const response = await axios.delete(UserURL + `delete/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    message.error("Error: " + error);
  }
}
};
export const UpdateUserInfo = async (data:any, token:any, role:any) => {
  if(role=="admin"){
  try {
    const response = await axios.put(UserURL + `/updateUser`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    message.error("Error: " + error);
  }
}
};
