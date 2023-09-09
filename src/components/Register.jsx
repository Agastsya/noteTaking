import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };
  return (
    <>
      <div>
        <h1>Register</h1>
        <form onSubmit={submitHandler}>
          <h3>Name</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h3>Email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3>Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
          <h2>OR</h2>
        </form>
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
      </div>
    </>
  );
};

export default Register;
