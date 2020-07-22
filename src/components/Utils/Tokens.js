import { Cookies } from "react-cookie";
import { getAllServersByNames } from "./Servers";
import axios from "axios";
const cookies = new Cookies();

/**
 * Returns an Array Object with all the available tokens
 */
export function getAvailableTokens() {
  let tokens = [];
  const serverlist = getAllServersByNames();
  for (let i = 0; i < serverlist.length; i++) {
    if (cookies.get(serverlist[i]) !== undefined) {
      let tokenDict = {
        servername: serverlist[i],
        token: cookies.get(serverlist[i]),
      };
      tokens.push(tokenDict);
    }
  }

  return tokens;
}

/**
 * Performs a token refresh with current user's valid credentials through Userpass.
 * @param {{account: String, username: String, password: String}} payload Current User credentials
 */
export async function refreshToken(payload) {
  const currentUser = {
    account: payload.account,
    username: payload.username,
    password: payload.password,
  };
  const accountList = JSON.parse(localStorage.getItem("Accounts"));
  const servers = JSON.parse(localStorage.getItem("servers"));
  const certlocation = localStorage.getItem("usercert")
  
  return axios.post("/login/userpass", {
    currentUser,
    accountList,
    servers,
    certlocation,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
}

export function printAvailableTokens() {
  const tokens = getAvailableTokens();
  for (let i = 0; i < tokens.length; i++) {
    console.log(tokens[i].token);
  }
}

/**
 * Purges all user tokens from the memory.
 */
export function purgeAllTokens() {
  const tokenKeys = getAllServersByNames();
  for (let i = 0; i < tokenKeys.length; i++) {
    cookies.remove(tokenKeys[i], { path: "/" });
  }
}
