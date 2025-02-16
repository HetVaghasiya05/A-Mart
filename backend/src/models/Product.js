const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }, 
  description: { type: String },
  price: { type: Number, required: true },
  location: { type: String, required: true }, 
  imageUrl: { type: String }, 
  seller: { type: String, required: true }, 
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
