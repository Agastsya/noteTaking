import { useContext, useEffect } from "react";
import { Context } from "../main";
import axios from "axios";
import { server } from "../main";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { isAuthenticated } = useContext(Context);
  const { user, setUser, setIsAuthenticated } = useContext(Context);
  useEffect(() => {
    axios
      .get(`${server}/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
      });
  }, []);
  if (!isAuthenticated) return <Navigate to={"/login"} />;

  return (
    <>
      <div>
        <h1>Profile</h1>
        <h2>{user?.name}</h2>
        <h2>{user?.email}</h2>
      </div>
    </>
  );
};

export default Profile;
