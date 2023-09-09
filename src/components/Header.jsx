import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="left-header">
        <Link to={"/"}>Keep Notes </Link>
      </div>
      <div className="right-header">
        <Link to={"/profile"}>Profile</Link>

        <Link to={"/register"}>Register</Link>

        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default Header;
