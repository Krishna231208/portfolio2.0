import express from "express";
import cors from "cors";

// Import routes
import profileRoute from "./routes/profile.routes.js";
import certificateRoute from "./routes/certificate.routes.js";
import chatRoutes from "./routes/chat.routes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Static file serving
app.use("/uploads", express.static("src/uploads"));

// API routes
app.use("/api/profile", profileRoute);
app.use("/api/certificates", certificateRoute);
app.use("/api/chatbot", chatRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend working!");
});

// Start server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
