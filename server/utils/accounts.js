/**
 * Validates the current user from the list of stored credentials
 * @param {{account: String, username: String, password: String}} currentUser
 * @param {Object} credentials
 */
function validateAccount(currentUser, credentials) {
  for (let i = 0; i < credentials.length; i++) {
    if (currentUser.account === credentials[i].account) return true;
  }

  return false;
}

/**
 * Checks if the current user passed the authentication
 * @param {{account: String, username: String, password: String}} currentUser
 * @param {[...{}, {account: String, server: String, status: number}]} attemptStatus
 */
function currentUserAuthenticated(currentUser, attemptStatus) {
  for (let i = 0; i < attemptStatus.length; i++) {
    if (
      currentUser.account === attemptStatus[i].account &&
      attemptStatus[i].status === 200
    )
      return true;
  }

  return false;
}

/**
 * Creates a `.cfg` file for JSON data
 * @param {String} filepath 
 * @param {String} block CFG File Block eg: client, database etc
 * @param {Object} params JS Object
 */
function writeConfigFile(filepath, block, params) {
  const fs = require("fs");

  fs.writeFile(filepath, `[${block}] \n`, (err) => {
    if (err) console.log(err);
  });

  Object.keys(params).forEach((item) => {
    fs.appendFile(filepath, `${item}: ${params[item]} \n`, (err) => {
      if (err) console.log(err);
    });
  });
}

/**
 * Takes in `.cfg` file and converts it into `.json`
 * @param {String} filepath 
 */
function parseConfigFile(filepath) {
  const fs = require("fs");
  let lines = [];
  const obj = {};

  function cleanString(string) {
    return string.trim().replace("https://", "");
  }

  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) console.log(err);
    lines = data.trim().split(/\r?\n/).splice(1);
    lines.forEach((line) => {
      const cleanedLine = cleanString(line);
      const [key, value] = cleanedLine.split(":");
      obj[key] = value.trim();
    });
    fs.writeFile(filepath + ".json", JSON.stringify(obj), (error) => {
      if (error) console.log(error)
    })
  });
}

module.exports = {
  validateAccount,
  currentUserAuthenticated,
  writeConfigFile,
  parseConfigFile,
};
