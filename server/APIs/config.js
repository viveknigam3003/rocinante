const axios = require("axios");
const https = require("https");
const fs = require("fs");

/**
 * Gets all the Server Config sections object from the Rucio Server.
 * @param {String} certlocation
 * @param {{name: String, host: String, auth: String}} server
 * @param {String} token
 */
async function getAllConfig(certlocation, server, token) {
  const httpsAgent = new https.Agent({ ca: fs.readFileSync(certlocation) });
  return axios
    .get(`https://${server.host}/config`, {
      httpsAgent,
      headers: { "X-Rucio-Auth-Token": token },
    })
    .then(console.log(`[INFO] Config received for ${server.name}`));
}

/**
 * Attempts to add an `option` with a `value` in a `section` on Rucio Server
 * @param {String} certlocation
 * @param {{name: String, host: String, auth: String}} server
 * @param {String} token
 * @param {{section: String, option: String, value: any}} payload
 */
async function addConfig(certlocation, server, token, payload) {
  const httpsAgent = new https.Agent({
    ca: fs.readFileSync(certlocation),
    rejectUnauthorized: false,
  });
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

/**
 *  Attempts to DELETE an `option` in a `section` on Rucio Server
 * @param {String} certlocation 
 * @param {{name: String, host: String, auth: String}} server
 * @param {String} token 
 * @param {{section: String, option: String, value: any}} payload
 */
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
