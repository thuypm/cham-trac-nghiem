import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const createExam = async (data) => {
  try {
    await axios.request({
      url: "/api/exam",
      method: "POST",
      data,
    });
  } catch (error) {}
};
export const getAllExam = async (params) => {
  try {
    const response = await axios.request({
      url: "/api/exam",
      method: "GET",
      params,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getExamById = async (id) => {
  try {
    const response = await axios.request({
      url: "/api/exam/" + id,
      method: "GET",
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
