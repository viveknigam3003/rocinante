const express = require("express");
const getDIDmeta = require("../APIs/metadata");
const router = express.Router();

router.post("/metadata", async (req, res) => {
  const accountConfig = req.body.accountConfig;
  const certlocation = req.body.certlocation;
  const scope = req.body.scope;
  const did = req.body.did;

  await getDIDmeta(
    certlocation,
    accountConfig.server.host,
    accountConfig.token.value,
    scope,
    did
  )
    .then((metadata) => {
      res.json(metadata.data);
    })
    .catch((err) => {
      console.log(`[ERROR] ` + err);
      res.sendStatus(401);
    });
});

module.exports = router;
