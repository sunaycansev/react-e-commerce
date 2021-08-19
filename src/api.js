import axios from "axios";

export const registerUser = async (input) => {
  const { data } = await axios.post("http://localhost:8000/users", input);
  return data;
};

export const getCurrentUser = async () => {
  const { data } = await axios.get("http://localhost:8000/users");
  // const me = localStorage.getItem("logindata");
  // console.log(me);
  return data;
};
