import { useState, createContext, useContext, useEffect } from "react";
import { getAllUsers, logoutUser } from "../api";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { setLocale } from "yup";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [loggedIn, setLoggedIn] = useState(false);
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("logindata")) !== null ? true : false
  );
  const [loading, setLoading] = useState(false);

  const login = (data) => {
    setLoggedIn(true);
    setUser(data);
    localStorage.setItem("logindata", JSON.stringify(data));

    const localeCart = localStorage.getItem("cart");
    setUser({ ...data, cart: JSON.parse(localeCart) });
    console.log(user);
  };
  // logout function
  const logout = async (callback) => {
    setLoggedIn(false);
    setUser(null);
    localStorage.removeItem("logindata");
    localStorage.removeItem("cart");
    await logoutUser();

    callback();
  };

  useEffect(() => {
    (async () => {
      try {
        const allUsers = await getAllUsers();
        const loginData = JSON.parse(localStorage.getItem("logindata"));

        if (loginData !== null) {
          const me = allUsers.filter(
            (user) =>
              user.email === loginData.email &&
              user.password === loginData.password
          );
          setLoggedIn(true);
          setUser(me[0]);
          // console.log(me[0]);
        }
        //console.log(logindata);
      } catch (e) {
        console.log(e);
        // setLoading(false);
      }
    })();
  }, []);
  console.log(loggedIn);

  // get current user

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
  const value = { user, setUser, login, loggedIn, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;

//
export const useAuthContext = () => useContext(AuthContext);
