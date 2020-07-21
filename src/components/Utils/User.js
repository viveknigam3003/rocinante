import { Cookies } from "react-cookie";
import { getAllServersByNames } from "./Servers";
import { getAvailableTokens } from "./Tokens";
const cookies = new Cookies();

/**
 * Saves the login information of the current user in local storage.
 * The info can be used to retrieve the token again when it expires.
 *
 * @param {String} account
 * @param {String} username
 * @param {String} password
 */
export function saveCurrentUser(account, username, password) {
  localStorage.setItem("CURR_ACCOUNT", account);
  localStorage.setItem("CURR_USERNAME", username);
  localStorage.setItem("CURR_PASSWORD", password);
  localStorage.setItem("APP_USER", "Rucio User");
}

/**
 * Removes the user details from local storage.
 */
export function purgeCurrentUser() {
  localStorage.removeItem("CURR_ACCOUNT");
  localStorage.removeItem("CURR_USERNAME");
  localStorage.removeItem("CURR_PASSWORD");
}

/**
 * Returns an object with current user's credentials
 */
export function getCurrentUser() {
  return {
    account: localStorage.getItem("CURR_ACCOUNT"),
    username: localStorage.getItem("CURR_USERNAME"),
    password: localStorage.getItem("CURR_PASSWORD"),
  };
}

/**
 * Returns true if valid AuthTokens are present in Cookies corresponding to connected servers.
 */
export function authTokensPresent() {
  var authTokens = [];
  const servers = getAllServersByNames();
  if (servers.length === 0) return false;

  for (var i = 0; i < servers.length; i++) {
    var tokenValue = cookies.get(servers[i]);
    if (tokenValue !== undefined) authTokens.push(tokenValue);
  }

  return authTokens.length > 0;
}

export function addNewAccountConfig(
  account,
  username,
  password,
  servername,
  hostserver,
  authserver,
  certlocation,
  mountppoint
) {
  const newAccountConfig = {
    account: account,
    username: username,
    password: password,
    server: {
      name: servername,
      host: hostserver,
      auth: authserver,
    },
    certlocation: certlocation,
    mountpoint: mountppoint,
  };

  try {
    let accountConfigs = JSON.parse(localStorage.getItem("Accounts"));
    accountConfigs.push(newAccountConfig);
    localStorage.setItem("Accounts", JSON.stringify(accountConfigs));
  } catch {
    let accountConfigs = [];
    accountConfigs.push(newAccountConfig);
    localStorage.setItem("Accounts", JSON.stringify(accountConfigs));
  }
}

export function getCurrentAccountConfig(servername = "") {
  const accountConfigs = JSON.parse(localStorage.getItem("Accounts"));
  for (let i = 0; i < accountConfigs.length; i++) {
    if (servername === accountConfigs[i].server.name)
      return accountConfigs[i];
  }

  return {}
}

/**
 * Returns an array of all the Authenticated Users with Available tokens
 */
export function findAuthenticatedAccounts() {
  const servers = JSON.parse(localStorage.getItem("servers"));
  const accounts = JSON.parse(localStorage.getItem("Accounts"));
  const tokens = getAvailableTokens();
  var authenticatedAccounts = [];

  for (var i = 0; i < tokens.length; i++) {
    for (var j = 0; j < servers.length; j++) {
      if (tokens[i].servername === servers[j].name) {
        const account = {
          server: { ...servers[j] },
          account: { ...accounts[j] },
          token: { ...tokens[i] },
        };
        authenticatedAccounts.push(account);
      }
    }
  }
  return authenticatedAccounts;
}
