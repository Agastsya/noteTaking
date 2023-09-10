import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../main";

const Header = () => {
  const { isAuthenticated } = useContext(Context);

  return (
    <div className="header">
      <div className="left-header">
        <Link to={"/"}>Keep Notes </Link>
      </div>
      <div className="right-header">
        <Link to={"/profile"}>Profile</Link>

        <Link to={"/register"}>Register</Link>
        {isAuthenticated ? (
          <Link to={"/logout"}>Logout</Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
