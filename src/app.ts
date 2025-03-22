import express from "express";
import cors from "cors";
import env from "dotenv";

import v1 from "./api/v1/routes";

env.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1", v1);

// Run Server
app.listen(PORT, () => {
	console.log(`[INFO] Server is running on http://localhost:${PORT}`);
});
