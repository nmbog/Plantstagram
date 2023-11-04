const express = require('express');
const router = express.Router();
const posts = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const imgSchema = require('../../models/Post');
const fs = require('fs');
const path = require ('path');
posts.set('view engine', 'ejs');
require('dotenv').config();


// @route  GET api/posts
// @access Public
router.get('/', (req, res) => res.send('Post route')); 

module.exports = router;