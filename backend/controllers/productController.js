// Temporary static product data
const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 1999,
    category: "Electronics",
    rating: { rate: 4.5 }
  },
  {
    id: 2,
    title: "Men's Jacket",
    price: 2999,
    category: "Fashion",
    rating: { rate: 4.2 }
  },
  {
    id: 3,
    title: "Smart Watch",
    price: 4999,
    category: "Electronics",
    rating: { rate: 4.7 }
  }
];

// GET all products
const getProducts = (req, res) => {
  res.json(products);
};

// GET product by ID
const getProductById = (req, res) => {
  const productId = parseInt(req.params.id);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};

// create new product
const createProduct = (req,res) => {
  const {title,price,category } = req.body;

  if (!title || !price) {
    return res.status(404).json({message: "Title and price are required"});
  }

  const newProduct = {
    id: Date.now(), //temporary unique id
    title,
    price,
    category: category || "General" ,
    rating: {rate:0},
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
};


module.exports = {
  getProducts,
  getProductById,
  createProduct,
};
