const express = require("express");
const { getFiles } = require("../APIs/files");
const router = express.Router();

router.post("/getfiles", (req, res) => {
  const list = getFiles(req.body.folder);
  if (list === null){
    res.sendStatus(404);
    return;
  }
  res.send(list).status(200);
});

module.exports = router;
