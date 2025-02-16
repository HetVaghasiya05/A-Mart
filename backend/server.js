const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const INFOBIP_API_KEY = process.env.INFOBIP_API_KEY;
const INFOBIP_BASE_URL = process.env.INFOBIP_BASE_URL;


const app = express();
app.set("view engine", "ejs");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoURI = process.env.MONGO_URI || "mongodb+srv://username:password@your-cluster.mongodb.net/A-Mart";

mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const productRoutes = require("./src/routes/productRoutes");
app.use("/api/products", productRoutes);

app.use('/api/auth', require('./src/routes/authRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
