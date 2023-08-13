import axios from "axios";
import { FEEDBACKURL, MODELURL} from "../data/constant/app-constant";
import { message } from "antd";

export const sendFileToServer = async (data: any, token:any,role:any) => {
  if(role=="admin"){
  try {
    const response = await axios.post(FEEDBACKURL+"csv/upload", data,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    message.success("File uploaded Successfully "+ response);
    return response;
  } catch (error) {
    message.error("error!!"+error);

  }
}
};


export const feedbackReset = async ( token:any,role:any) => {
  if(role=="admin"){
  try {
    await axios.get(FEEDBACKURL+"knowledge/reset", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    message.success("Knowledgebase reset Successfully ");
  } catch (error) {
    message.error("error!!"+error);

  }
}
};
export const calcMetrics = async ( token:any,role:any) => {
  if(role=="admin"){
  try {
    const response =await axios.get(MODELURL+"metrics", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    message.error("error!!"+error);

  }
}
};
export const trainModel = async ( token:any,role:any) => {
  if(role=="admin"){
  try {
    const response =await axios.get(MODELURL+"train", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if(response.data=="done")
    message.success("Model trained Successfully ");

  } catch (error) {
    message.error("error!!"+error);

  }
}
};

export const accuracy = async ( token:any,role:any) => {
  if(role=="admin"){
  try {
    const response =await axios.get(MODELURL+"accuracy", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    message.error("error!!"+error);

  }
}
};