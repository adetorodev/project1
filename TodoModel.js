
/**
 * TodoSchema
 * A basic schema showing how MongoDB documents are structured under Mongoose.
 * Demonstrates validation and strict typing (don’t trust client input blindly).
 */
import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String, // Must be a string
      required: true, // Mandatory field
      trim: true, // Remove whitespace
    },
    completed: {
      type: Boolean, // Boolean flag
      default: false, // Default value
    },
  },
  {
    timestamps: true, // Auto-add createdAt & updatedAt
  }
);

// Compile schema to model
export const Todo = mongoose.model("Todo", TodoSchema);
