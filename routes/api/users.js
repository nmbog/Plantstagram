const express = require("express");
const router = express.Router();
import { check } from "express-validator";

// @route  POST api/users
// Register user
// @access Public
router.post(
  "/",
  [check("name", "Name is required").not().isEmpty()],
  (req, res) => {
    console.log(req.body);
    res.send("User route");
  }
);

module.exports = router;
