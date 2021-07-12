const router = require("express").Router();
const User = require("../model/User");

//GET Users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().populate({ path: "pets", select: "name" });

    res.send(users);
  } catch (err) {
    throw new Error(err.message);
  }
});

module.exports = router;
