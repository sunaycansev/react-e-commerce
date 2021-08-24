import axios from "axios";

export const registerUser = async (input) => {
  const { data } = await axios.post(
    "https://612566f5da3cde0017da105d.mockapi.io/api/users",
    input
  );
  return data;
};

export const loginUser = async (input) => {
  const { data } = await axios.get(
    "https://612566f5da3cde0017da105d.mockapi.io/api/users"
  );

  let isUser = data.filter(
    (user) => user.email === input.email && user.password === input.password
  );
  if (isUser.length !== 1) {
    isUser = false;
  }
  return isUser;
};

export const getAllUsers = async () => {
  const { data } = await axios.get(
    "https://612566f5da3cde0017da105d.mockapi.io/api/users"
  );
  // const me = localStorage.getItem("logindata");
  // console.log(me);
  return data;
};

export const logoutUser = async (input) => {
  const { data } = await axios.post(
    "https://612566f5da3cde0017da105d.mockapi.io/api/users"
  );
  return data;
};
