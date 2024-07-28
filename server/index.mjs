import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

app.get("/api/", (req, res) => {
  res.send("Hello, world!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
