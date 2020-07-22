const axios = require("axios");
const https = require("https");
const fs = require("fs");

async function getTokenWithUserpass(req, res, credentials) {
  const httpsAgent = new https.Agent({
    ca: fs.readFileSync(credentials.certlocation),
  });
  return axios
    .get(`https://${credentials.server.auth}/auth/userpass`, {
      httpsAgent,
      headers: {
        "X-Rucio-Account": credentials.account,
        "X-Rucio-Username": credentials.username,
        "X-Rucio-Password": credentials.password,
      },
    })
    .then((response) => {
      let RUCIO_TOKEN = response.headers["x-rucio-auth-token"];
      res.cookie(`${credentials.server.name}`, RUCIO_TOKEN, {
        maxAge: 60 * 60 * 1000, //1-Hour
      });
      return true;
    })
    .catch((err) => {
      console.log(`[DEBUG] ${err}`);
      return false;
    });
}

module.exports = getTokenWithUserpass;
