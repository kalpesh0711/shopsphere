const Product = require("../models/productModel");

// GET all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500);
    throw new Error("Failed to fetch products");
  }
};

// GET product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }

    res.json(product);
  } catch (error) {
    res.status(400);
    throw new Error("Invalid product ID");
  }
};

// CREATE product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400);
    throw new Error("Invalid product data");
  }
};

// UPDATE product
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedProduct) {
      res.status(404);
      throw new Error("Product not found");
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(400);
    throw new Error("Invalid update data");
  }
};

// DELETE product
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      res.status(404);
      throw new Error("Product not found");
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500);
    throw new Error("Server error while deleting product");
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};