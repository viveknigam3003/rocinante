const express = require("express");
const getTokenWithUserpass = require("../APIs/authUserpass");
const {
  validateAccount,
  currentUserAuthenticated,
} = require("../utils/accounts");
const router = express.Router();

router.post("/login/userpass", async (req, res) => {
  const credentials = req.body.payload.configs;
  const currentUser = req.body.payload.currentUser;

  if (!validateAccount(currentUser, credentials)) {
    res.sendStatus(401);
    console.log(`[INFO] Invalid Credentials for: ${currentUser.account}`);
    return;
  }

  let attemptStatus = [];

  for (let i = 0; i < credentials.length; i++) {
    try {
      const authStatus = await getTokenWithUserpass(req, res, credentials[i]);
      if (authStatus) {
        attemptStatus.push({
          account: credentials[i].account,
          server: credentials[i].server.name,
          status: 200,
        });
        console.log(`[INFO] Token received for ${credentials[i].server.name}`);
      } else {
        attemptStatus.push({
          account: credentials[i].account,
          server: credentials[i].server.name,
          status: 401,
        });
        console.log(
          `[INFO] Failed to get token from ${credentials[i].server.name}`
        );
      }
    } catch (e) {
      console.log(e);
    }
  }

  if (attemptStatus.length !== credentials.length) {
    res.sendStatus(500);
    return;
  }

  if (currentUserAuthenticated(currentUser, attemptStatus)) {
    res.send(attemptStatus).status(200);
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
