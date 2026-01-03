import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";

// Load environment variables
dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());         
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());  

// Routes
app.use("/api/tasks", taskRoutes);


const PORT = process.env.PORT ?? 5000;

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

