const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();

// @route  POST api/users
// Register user
// @access Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email address").isEmail(),
    check(
      "password",
      "Please enter a password with 8 or more characters"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);

    res.send("User route");
  }
);

module.exports = router;
