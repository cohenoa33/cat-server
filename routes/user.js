const router = require("express").Router();
const User = require("../model/User");
const verify = require("../helpers/verifyToken");

//GET Users
router.get("/", verify, async (req, res) => {
  const users = await User.find().populate({ path: "pets", select: "name" });

  res.send(users);
});

module.exports = router;
