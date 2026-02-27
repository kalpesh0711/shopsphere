const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");   // ADD THIS
const productRoutes = require("./routes/productRoutes");



const app = express();

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// CONNECT DATABASE
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Shopsphere Backend Running");
});

const { errorHandler } = require("./middleware/errorMiddleware");

app.use(errorHandler);




// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});