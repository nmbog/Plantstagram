const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const { check, validationResult } = require("express-validator");

// Get user profile
router.get("/current_user", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["name"]
    );
    if (!profile) {
      return res.status(400).json({ msg: "No profile exists for this user" });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Create or edit user profile
router.post("/current_user", [auth], async (req, res) => {
  const { location, bio } = req.body;

  // Build profile
  const profileFields = {};
  profileFields.user = req.user.id;
  if (location) profileFields.location = location;
  if (bio) profileFields.bio = bio;

  try {
    let profile = await Profile.findOne({ user: req.user.id });
    if (profile) {
      // Edit profile if profile exists
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.json(profile);
    }
    // Create profile
    profile = new Profile(profileFields);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Get all profiles
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name"]);
    res.json(profiles);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// View specific profile by user id
// Work in progress
/*
router.get("/", async (req, res) => {
    try {
      const profiles = await Profile.find().populate("user", ["name"]);
      res.json(profiles);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  });
  */
module.exports = router;
