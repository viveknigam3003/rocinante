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

async function addConfig(certlocation, server, token, payload) {
  const httpsAgent = new https.Agent({ ca: fs.readFileSync(certlocation), rejectUnauthorized: false });
  const section = payload.section;
  const option = payload.option;
  const value = payload.value;

  return axios
    .put(`https://${server.host}/config/${section}/${option}/${value}`, {
      httpsAgent,
      headers: { "X-Rucio-Auth-Token": token },
    })
    .then((res) => {
      console.log(`[INFO] Added ${section}.${option} on ${server.name}`);
      console.log(res);
    });
}

async function delConfig(certlocation, server, token, payload) {
  const httpsAgent = new https.Agent({ ca: fs.readFileSync(certlocation) });
  const section = payload.section;
  const option = payload.option;

  return axios
    .delete(`https://${server.host}/config/${section}/${option}`, {
      headers: { "X-Rucio-Auth-Token": token },
      httpsAgent,
    })
    .then((res) => {
      console.log(`[INFO] Deleted ${section}.${option} on ${server.name}`);
      console.log(res.data);
    });
}

module.exports = { getAllConfig, addConfig, delConfig };
