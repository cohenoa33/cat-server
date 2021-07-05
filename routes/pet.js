const router = require("express").Router();
const verify = require("../helpers/verifyToken");
const Pet = require("../model/Pet");
const User = require("../model/User");

//GET BY USER ID
router.get("/", verify, async (req, res) => {
  const pets = await Pet.find({ user: req.body.user });
  res.send(pets);
});

//CREATE
router.post("/create", verify, async (req, res) => {
  const user = await User.findOne({ _id: req.body.user });
  if (!user) return res.status(400).send("User Id not found");

  const pet = new Pet({
    name: req.body.name,
    user: user.id
  });

  try {
    const savedPet = await pet.save();
    res.send(savedPet);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

//UPDATE BY NAME
router.post("/update", verify, async (req, res) => {
  const pet = await Pet.findOne({ _id: req.body.id });
  if (!pet) return res.status(400).send("Pet Id not found");
  try {
    const filter = { _id: req.body.id };
    const update = { name: req.body.name };
    const updatedPet = await Pet.findOneAndUpdate(filter, update, {
      returnOriginal: false,
      useFindAndModify: false
    });

    res.send(updatedPet);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = router;
