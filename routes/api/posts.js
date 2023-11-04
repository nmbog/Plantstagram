const express = require("express");
const router = express.Router();
const posts = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Post = require("../../models/Post");
const fs = require("fs");
const path = require("path");
posts.set("view engine", "ejs");
require("dotenv").config();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const multer = require("multer");

posts.use(bodyParser.urlencoded({ extended: false }));
posts.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage});

router.get('/', (req, res) => {
    Post.find({}.then((data, err) => {
        if(err) {
            console.log(err);
        }
        res.render('imagepage', {items: data})
    }))
})

// Create a post
router.post(
  "/",
  [auth, [check("caption", "Caption is required").not().isEmpty()]],
  upload.single("image"),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");
      const newPost = {
        name: user.name,
        caption: req.body.caption,
        img: {
          data: fs.readFileSync(
            path.join(__dirname + "/uploads/" + req.file.filename)
          ),
          contentType: "image/png",
        },
        user: req.user.id,
      };
      const post = await newPost.save();

      res.json(post);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
