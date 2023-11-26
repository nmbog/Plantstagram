import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Alert from "./components/layout/Alert";

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Alert />
      <Routes>
        <Fragment>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Fragment>
      </Routes>
    </Router>
  </Provider>
);

export default App;
