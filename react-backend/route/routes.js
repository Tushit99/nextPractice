const express = require("express");
const { WomensTopModel } = require("../module/product.model");
 
const menRouter = express.Router();

menRouter.get("/",async(req,res)=>{
    try { 
        let data = await WomensTopModel.find(); 
        res.send({message: data});  
    } catch (err) {
        res.status(500).send({message: "Error"}); 
    }
})
