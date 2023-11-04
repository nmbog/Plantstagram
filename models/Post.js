const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  caption: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  /*
  likes: [
    {
        user: {
            type: Schema.Types.ObjectId, 
            ref: 'users'
        }
    }
  ],
  comments: [
    {
        user: {
            type: Schema.Types.ObjectId, 
            ref: 'users'
        },
        text: {
            type: String,
            required: true
        }
    }
  ]
  */
});

module.exports = Post = mongoose.model("post", PostSchema);
