const mongoose = require("mongoose");

const menshirtSchema = mongoose.Schema(
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
    rating: Number,
    sleeves: String,
    brand: String,
    gender: String,
    delivery: String,
    tags: String,
    stock: String,
  },
  {
    versionKey: false,
  }
);

const menshirtModel = mongoose.model("menshirt", menshirtSchema);

module.exports = {
  menshirtModel,
};
