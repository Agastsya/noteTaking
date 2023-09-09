import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>
        <h1>Login</h1>
        <form>
          <h3>Email</h3>
          <input type="email" />
          <h3>Password</h3>
          <input type="password" />
          <button type="submit">Login</button>
          <h2>OR</h2>
        </form>
        <Link to={"/register"}>
          <button>Register</button>
        </Link>
      </div>
    </>
  );
};

export default Login;
