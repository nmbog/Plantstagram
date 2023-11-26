import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Success");
  };
   
  return (
    <Fragment>
      <div className="content">
        <h1>Plantstagram</h1>
        <h2>Sign In</h2>
        <p>Sign in to your account!</p>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="8"
            value={password}
            onChange={(e) => onChange(e)}
          />
          <input type="submit" value="login" class="btn-input" />
        </form>
        <p>
          Need an account? <Link to="/register">Register here!</Link>
        </p>
      </div>
    </Fragment>
  );
};

export default Login;
