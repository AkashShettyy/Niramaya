import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// Routes
app.use("/api/appointments", appointmentRoutes);
app.use("/api/blogs", blogRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Niramaya Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
