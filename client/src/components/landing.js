import React from "react";
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="content">
      <h1>Plantstagram</h1>
      <p>
        Showcase your vibrant plant collection and discover exciting additions
        to elevate your botanical paradise!
      </p>
      <button>
        <Link to="/register">register</Link>
      </button>
      <button>
        <Link to="/login">login</Link>
      </button>
    </div>
  );
};

export default Landing;
