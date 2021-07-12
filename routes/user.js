const router = require("express").Router();
const User = require("../model/User");

//GET Users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().populate({ path: "pets", select: "name" });
    console.log(users);
    res.send(users);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
});

module.exports = router;
