const express = require("express");
const app = express();

// Render.com (en andere hosts) geven de poort via process.env.PORT door
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Yasmin Khawaja is here!");
});

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});
