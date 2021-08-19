import React from "react";
import Header from "../../components/Header/Header";
import { useAuthContext } from "../../contexts/AuthContext";
function Profile() {
  const { users: user } = useAuthContext();
  console.log(user);
  return (
    <React.Fragment>
      <Header />
      <h1>profil bilgileri</h1>
      <code>{JSON.stringify(user)}</code>
      <h1>profile page</h1>
    </React.Fragment>
  );
}
export default Profile;
