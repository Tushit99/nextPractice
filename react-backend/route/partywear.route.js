const express = require("express");
const { partywearModel } = require("../module/partyWear.model");
const partywereRoute = express.Router();

partywereRoute.get("/", async (req, res) => {
    const param = req.params;
    try {
        let data = await partywearModel.find();
        res.send({ message: data });
    } catch (err) {
        res.status(500).send({ message: "Error" });
    }
});

partywereRoute.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        let data = await partywearModel.find({ _id: id });
        res.send({ message: data });
    } catch (err) {
        res.status(500).send({ message: "Error" });
    }
});

partywereRoute.post("/add", async (req, res) => {
    const payload = req.body;
    try {
        const WomensTop = new partywearModel(payload);
        await WomensTop.save();
        res.status(200).send({ message: "item has been Added" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

module.exports = { partywereRoute };
