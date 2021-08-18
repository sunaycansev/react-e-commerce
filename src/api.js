import axios from "axios";

export const registerUser = async (input) => {
  const { data } = await axios.post("http://localhost:8000/users", input);
  return data;
};
