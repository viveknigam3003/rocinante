import axios from "axios";

/**
 * Attempts login with USERPASS Strategy from Rucio-Server
 * @param {String} account Valid Rucio Account
 * @param {String} username Account identity: Username
 * @param {String} password Account identity: Password
 */
export function loginWithUserpass(account, username, password) {
  const payload = {
    currentUser: { account: account, username: username, password: password },
    configs: JSON.parse(localStorage.getItem("Accounts")),
  };

  return axios
    .post("/login", {
      payload,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
}
