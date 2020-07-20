import { Cookies } from "react-cookie";

/**
 * Returns an array of all the server-names for the servers present.
 * This is useful since the tokens are stored in cookies with the server's hostname as the key.
 */
export function getAllServersByNames() {
  let serverNames = [];
  const accounts = JSON.parse(localStorage.getItem("Accounts"));
  for (let i = 0; i < accounts.length; i++){
    let name = accounts[i].server.name;
    serverNames.push(name);
  }

  return serverNames
}

export function serverStatus() {
  const cookies = new Cookies();
  let status = [];
  const servernames = getAllServersByNames();

  //UPDATE LOGIC! THIS DOESN'T WORK
  for (let i = 0; i < servernames.length; i++){
    if (cookies.get(servernames[i]) !== undefined)
      status.push({server: servernames[i], status: "Connected"})
    else {
      status.push({server: servernames[i], status: "Disconnected"})
    }
  }
  
  return status;
}