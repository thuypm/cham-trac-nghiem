import axios from "axios";

export const getAllAssignment = async (examId, params) => {
  try {
    const response = await axios.request({
      url: "/api/assignment/" + examId,
      method: "GET",
      params,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
