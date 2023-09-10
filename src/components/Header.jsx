import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { server } from "../main";
import toast from "react-hot-toast";

const Header = () => {
  const { isAuthenticated } = useContext(Context);
  const logoutHandler = () => {
    try {
      axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });
      toast.success("Logged Out");
      isAuthenticated(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="header">
      <div className="left-header">
        <Link to={"/"}>Keep Notes </Link>
      </div>
      <div className="right-header">
        <Link to={"/profile"}>Profile</Link>

        {isAuthenticated ? (
          <Link to="/register"></Link>
        ) : (
          <Link to={"/register"}>Register</Link>
        )}
        {isAuthenticated ? (
          <Link onClick={logoutHandler} to="/login">
            Logout
          </Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
