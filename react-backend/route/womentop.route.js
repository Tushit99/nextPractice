const express = require("express");
const { WomensTopModel } = require("../module/womentop.model");
  
const womentopRouter = express.Router();

womentopRouter.get("/",async(req,res)=>{
    try { 
        let data = await WomensTopModel.find(); 
        res.send({message: data});  
    } catch (err) {
        res.status(500).send({message: "Error"}); 
    }
})

womentopRouter.post("/add", async (req, res) => {
    const payload = req.body;
    try {
      const WomensTop = new WomensTopModel(payload);
      await WomensTop.save(); 
      res.status(200).send({ message: "item has been Added" });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }); 

module.exports={womentopRouter}
