const express = require("express");
const cors = require("cors");
const port = 3004;
const app = express();
const files = require('./routes/files');
const metadata = require('./routes/metadata');

app.use(cors({ origin: "http://localhost:3005" }));
app.use(express.json());
app.use(files)
app.use(metadata)

app.listen(port, () =>
  console.log(`[INFO] Rucio running at http://localhost:${port}`)
);
