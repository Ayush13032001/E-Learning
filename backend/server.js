import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import { clerkWebhook } from "./controller/webhooks.js";
dotenv.config();

// intialize express

const app = express();
connectDB();

// Middleware

app.use(cors());
app.use(express.json());

//Routes

app.get("/", (req, res) => res.send("Api Working"));

app.post("/clerk", clerkWebhook);

// port

const PORT = process.env.PORT || 8000;

export default app;
