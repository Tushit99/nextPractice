const mongoose = require("mongoose");

const womensTopSchema = mongoose.Schema(
  {
    image: String,
      title: String,
      description: String,
      price: String,
      originalPrice: String,
      category: String,
      style: String,
      color: String,
      material: String,
      fit: String,
      occasion: String,
      rating: Number ,
      sleeves: String,
      brand: String,
      gender: String,
      delivery: String,
      tags: String,
      stock: String
  },
  {
    versionKey: false,
  }
);

const WomensTopModel = mongoose.model("womentop", womensTopSchema);

module.exports = {
    WomensTopModel,
};