import express from "express";

const app = express();

const PORT = 3000;

app.use (express.json());

app.get("/log", (_req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});