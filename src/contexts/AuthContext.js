import { useState, createContext, useContext, useEffect } from "react";
import { getAllUsers } from "../api";
import { Container, Row, Col, Spinner } from "react-bootstrap";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  // get all users from api
  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       const res = await fetch("http://localhost:8000/users", {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //       });
  //       const data = await res.json();
  //       // const localeUsers = JSON.parse(window.localStorage.getItem("users"));
  //       //
  //       // if (!localeUsers) {
  //       //   setUsers(data);
  //       //   window.localStorage.setItem("users", JSON.stringify(data));
  //       // } else {
  //       //   localeUsers.length > data.length
  //       //     ? setUsers(localeUsers)
  //       //     : setUsers(data);
  //       //   window.localStorage.setItem("users", JSON.stringify(localeUsers));
  //       // }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   getUsers();
  // }, []);
  // check locale storage and set locale storage and determines users state
  // useEffect(() => {
  //   const localeUsers = JSON.parse(window.localStorage.getItem("users"));
  //   setUsers(localeUsers);
  // }, [users?.length]);

  //login functiıon
  const login = (data) => {
    setLoggedIn(true);
    setUsers(data);
    localStorage.setItem("logindata", JSON.stringify(data));
  };
  // get current user
  useEffect(() => {
    (async () => {
      try {
        const allUsers = await getAllUsers();
        const logindata = JSON.parse(localStorage.getItem("logindata"));
        //console.log(logindata);

        if (logindata !== null) {
          const me = allUsers.filter((user) => user.email === logindata.email);
          setLoggedIn(true);
          setUsers(me);

          console.log(me);
        }
        //console.log(logindata);

        // const me = users.filter(
        //   (user) => user.email === data.email && user.password === data.password
        // );
      } catch (e) {
        console.log(e);
        // setLoading(false);
      }
    })();
  }, []);

  const value = { users, setUsers, login, loggedIn };

  if (loading) {
    return (
      <Container>
        <Row>
          <Col>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      </Container>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;

//
export const useAuthContext = () => useContext(AuthContext);
