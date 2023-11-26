import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";

const Register = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const onChange = (e) => 
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password does not match", "danger");
    } else {
      console.log("Success");
    }
  };

  return (
    <Fragment>
      <div className="content">
        <h1>Plantstagram</h1>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="8"
            value={password2}
            onChange={(e) => onChange(e)}
          />
          <input type="submit" value="register" class="btn-input" />
        </form>
        <p>
          Already have an account? <Link to="/login">Login!</Link>
        </p>
      </div>
    </Fragment>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
};
export default connect(null, { setAlert })(Register);
