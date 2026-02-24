import express from "express";
import Blog from "../models/Blog.js";

const router = express.Router();

// GET all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET single blog
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

// Create blog (temporary for inserting your blogs)
router.post("/", async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.status(201).json({ message: "Blog added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
