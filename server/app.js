const express = require("express");
const cors = require("cors");
const port = 3004;
const app = express();

app.use(cors({ origin: "http://localhost:3005" }));

app.listen(port, () =>
  console.log(`[INFO] Rucio running at http://localhost:${port}`)
);
