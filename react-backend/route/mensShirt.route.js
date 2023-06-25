const express = require("express");
const { menshirtModel } = require("../module/menshirt.model");
 
const menshirtRouter = express.Router();

menshirtRouter.get("/", async (req, res) => {   
  const param = req.params; 
  try {
    let data = await menshirtModel.find();
    res.send({ message: data });
  } catch (err) {
    res.status(500).send({ message: "Error" });
  }
});

menshirtRouter.get("/:id", async (req, res) => {   
  const { id } = req.params; 
  try {
    let data = await menshirtModel.find({ _id: id });
    res.send({ message: data });
  } catch (err) {
    res.status(500).send({ message: "Error" });
  }
});

menshirtRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const WomensTop = new menshirtModel(payload);
    await WomensTop.save();
    res.status(200).send({ message: "item has been Added" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = { menshirtRouter };
