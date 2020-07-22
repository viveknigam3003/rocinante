const express = require("express");
const getAllConfig = require("../APIs/config");
const router = express.Router();

router.post("/config", async (req, res) => {
    const payload = req.body.payload;
  
    await getAllConfig(
      payload.certlocation,
      payload.server,
      payload.token,
    )
      .then((config) => {
        res.send(config.data);
      })
      .catch((err) => {
        console.log(`[ERROR] ` + err);
        res.sendStatus(401);
      });
  });
  
  module.exports = router;
  