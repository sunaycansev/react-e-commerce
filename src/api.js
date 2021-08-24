import axios from "axios";

export const registerUser = async (input) => {
  const { data } = await axios.post("http://localhost:8000/users", input);
  return data;
};

export const loginUser = async (input) => {
  const { data } = await axios.get("http://localhost:8000/users");

  let isUser = data.filter(
    (user) => user.email === input.email && user.password === input.password
  );
  if (isUser.length !== 1) {
    isUser = false;
  }
  return isUser;
};

export const getAllUsers = async () => {
  const { data } = await axios.get("http://localhost:8000/users");
  // const me = localStorage.getItem("logindata");
  // console.log(me);
  return data;
};

export const logoutUser = async (input) => {
  const { data } = await axios.post("http://localhost:8000/users");
  return data;
};
