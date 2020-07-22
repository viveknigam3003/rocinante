const axios = require("axios");
const https = require("https");
const fs = require("fs");

async function getAllConfig(certlocation, server, token) {
  const httpsAgent = new https.Agent({ ca: fs.readFileSync(certlocation) });
  return axios
    .get(`https://${server.host}/config`, {
      httpsAgent,
      headers: { "X-Rucio-Auth-Token": token },
    })
    .then(console.log(`[INFO] Config received for ${server.name}`));
}

module.exports = getAllConfig;
