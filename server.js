import express from "express";
import path from "path";
import todoRoutes from "./TodoRoute.js";
import connectDB from "./database.js";

const app = express();

// Built-in middleware for JSON parsing
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(process.cwd(), "public")));

connectDB();

// Mount Todo routes
app.use("/api/todos", todoRoutes);

// Global fallback 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(4000, () => console.log("Todo API running on http://localhost:4000"));