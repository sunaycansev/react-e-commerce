import React from "react";
import Header from "../../components/Header/Header";
import { useAuthContext } from "../../contexts/AuthContext";
import { Button } from "react-bootstrap";
function Profile({ history }) {
  const { user, logout } = useAuthContext();
  const handleLogout = async () => {
    console.log("ddsa");
    logout(() => {
      history.push("/");
    });
  };
  console.log(user);
  return (
    <React.Fragment>
      <Header />
      <h1>profil bilgileri</h1>
      <code>{JSON.stringify(user)}</code>
      <h1>profile page</h1>
      <Button variant="danger" onClick={handleLogout}>
        Logout
      </Button>
    </React.Fragment>
  );
}
export default Profile;
