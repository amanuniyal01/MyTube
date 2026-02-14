const express = require("express");
const cors = require("cors");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();

app.use(cors());

app.get("/api/suggest", async (req, res) => {
  try {
    const q = req.query.q;

    const response = await fetch(
      `https://suggestqueries.google.com/complete/search?client=firefox&q=${q}`
    );

    const data = await response.json();

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch suggestions" });
  }
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
