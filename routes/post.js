const express = require("express");

const router = express.Router();

//importing models
const PostModel = require("../models/Post");

//CREATING THE POST AND ADDING THE DATA TO THE DATABASE
router.post("/", async (req, res) => {
  //ADDING THE NEW DATA USING MODEL WITH POST REQUEST
  const post = new PostModel({
    title: req.body.title,
    description: req.body.description,
  });

  try {
      const savedData = await post.save()
      res.json(post)

  } catch (error) {
      res.json({message:error})
  }

//   try{post
//     .save()}
//     .then((data) => {
//       res.json(data);
//     })}
//     .catch((err) => {
//       res.json({ message: err });
//     });
});


//READING ALL THE DATA FROM THE DATABASE USING PostModel under Model
router.get("/", async(req, res) => {
  try {
    const posts = await PostModel.find()
    res.json(posts)
  } catch (error) {
      res.json({message:error})
  }
});

//READING SPECIFIC DATA FROM DATABASE
router.get("/:postid", (req, res) => {
    console.log(req.params.postid)
})

router.get("/specific", (req, res) => {
  res.send("we are on specific post");
});

module.exports = router;
