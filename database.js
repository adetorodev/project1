/**
 * connectDB
 * Handles MongoDB connection using Mongoose with strict error control.
 * Avoids silent failures and exposes fatal errors clearly.
 */
import mongoose from "mongoose";

export default async function connectDB() {
    try {
        // Attempt connection with modern parser
        await mongoose.connect("mongodb+srv://adetoroe787_db_user:5TM2yym3EOl6PbB5@cluster0.tvq4zgh.mongodb.net/?appName=Cluster0", {
            serverSelectionTimeoutMS: 5000, // Fail fast if server unavailable
        });

        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection failed:", err.message); // Log error message
        process.exit(1); // Crash intentionally → forces you to fix issue early
    }
};

// Bind connection events (useful but often ignored)
// Extra addons
mongoose.connection.on("error", (err) => {
    console.error("Mongo error:", err);
});

mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected");
});
