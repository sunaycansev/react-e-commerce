import axios from "axios";

// axios.interceptors.request.use(
//   function (config) {
//     const { origin } = new URL(config.url);
//
//     const allowedOrigins = [`http://localhost:8000/users`];
//     const datas = localStorage.getItem("logindata");
//
//     if (allowedOrigins.includes(origin)) {
//       config.headers.authorization = datas;
//     }
//     return config;
//   },
//   function (error) {
//     //Do sth with request error
//     return Promise.reject(error);
//   }
// );
export const registerUser = async (input) => {
  const { data } = await axios.post("http://localhost:8000/users", input);
  return data;
};

export const loginUser = async (input) => {
  const { data } = await axios.get("http://localhost:8000/users");
  console.log(data);
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
};
