import axios from "axios";
import { MLMODELURL} from "../data/constant/app-constant";
import { message } from "antd";

export const sendFileToServer = async (data: any) => {
  try {
    const response = await axios.post(MLMODELURL+"csv/upload", data);
    message.success("File uploaded Successfully "+ response);
    return response;
  } catch (error) {
    message.error("error!!"+error);

  }
};
