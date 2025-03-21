import env from "dotenv";
env.config();

import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Run Server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
