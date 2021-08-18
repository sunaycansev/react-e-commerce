import { useState, createContext, useContext, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const login = (data) => {
    setLoggedIn(true);
    setUsers(data);
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch("http://localhost:8000/users", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const data = await res.json();
        const localeUsers = JSON.parse(window.localStorage.getItem("users"));

        if (!localeUsers) {
          setUsers(data);
          window.localStorage.setItem("users", JSON.stringify(data));
        } else {
          localeUsers.length > data.length
            ? setUsers(localeUsers)
            : setUsers(data);
          window.localStorage.setItem("users", JSON.stringify(localeUsers));
        }
      } catch (e) {
        console.log(e);
      }
    };
    getUsers();
  }, []);

  useEffect(() => {
    const localeUsers = JSON.parse(window.localStorage.getItem("users"));
    setUsers(localeUsers);
  }, [users?.length]);

  const value = { users, setUsers, login };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;

//
export const useAuthContext = () => useContext(AuthContext);
