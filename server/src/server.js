import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// Load environment variables
config();

// Import Routes
import authRoutes from "./routes/authRoutes.js";

// Import Security Middleware
import arcjetMiddleware from "./middleware/arcjetMiddleware.js";

// Create express app
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Apply Arcjet security middleware (rate limiting, bot protection, shield WAF)
app.use(arcjetMiddleware);

// Routes
app.use("/auth", authRoutes);

// Health check
app.get("/", (req, res) => {
    res.json({ status: "ok", message: "Template Backend API" });
});

// Start server
const server = app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (error) => {
    console.error("Unhandled Rejection:", error);
    server.close(() => process.exit(1));
});

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
    console.error("Uncaught Exception:", error);
    process.exit(1);
});

// Graceful shutdown
process.on("SIGINT", () => {
    console.log("SIGINT received, shutting down gracefully");
    server.close(() => process.exit(0));
});
