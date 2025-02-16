const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { category } = req.query; 
    const products = category ? await Product.find({ category }) : await Product.find();
    // res.json(products); 
    res.render("home", {products});   
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});


router.get("/:name", async (req, res) => {
  try {
    // const product = await Product.find({ name: req.params.name });
    // res.json(products);

     const productName = req.params.name;
     const product = await Product.findOne({ name: productName });

     if (!product) {
      return res.status(404).send('Product not found');
    }

     res.render("product", { product });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});


router.get("/details/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});


router.post("/add", async (req, res) => {
  try {
    const { name, description, price, imageUrl } = req.body;
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully!", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error saving product", error });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

module.exports = router;
