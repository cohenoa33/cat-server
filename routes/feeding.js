const router = require("express").Router();
const verify = require("../helpers/verifyToken");
const Pet = require("../model/Pet");
const Feeding = require("../model/Feeding");

//GET BY Pet ID
router.get("/", verify, async (req, res) => {
  const feedings = await Feeding.find({ pet: req.body.pet });
  res.send(feedings);
});

//CREATE
router.post("/create", verify, async (req, res) => {
  const pet = await Pet.findOne({ _id: req.body.pet });
  if (!pet) return res.status(400).send("Pet Id not found");

  const feeding = new Feeding({
    foodType: req.body.foodType,
    feedingType: req.body.feedingType,
    weight: req.body.weight,
    pet: pet.id
  });

  try {
    const savedFeeding = await feeding.save();
    res.send(savedFeeding);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

//UPDATE BY ID
router.post("/update", verify, async (req, res) => {
  const feeding = await Feeding.findOne({ _id: req.body.id });
  if (!feeding) return res.status(400).send("Feeding Id not found");
  try {
    const filter = { _id: req.body.id };

    const update = {
      foodType: req.body.foodType,
      feedingType: req.body.feedingType,
      weight: req.body.weight,
      updated: new Date()
    };
    const updatedFeeding = await Feeding.findOneAndUpdate(filter, update, {
      returnOriginal: false,
      useFindAndModify: false
    });

    res.send(updatedFeeding);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = router;
