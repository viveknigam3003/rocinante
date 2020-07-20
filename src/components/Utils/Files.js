import axios from "axios";
import { getCurrentUser } from "./User";

/**
 * Returns a promise which resolves to an array of files in the given folder
 * @param {String} folder 
 */
export function lsFolder(folder) {
  try {
    const response = axios.post("http://localhost:3004/files", {
      folder,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (err) {
    return console.log(err);
  }
}

export function currentUserMountPoint(){
  const currentUser = getCurrentUser();
  const accounts = JSON.parse(localStorage.getItem("Accounts"));

  for (let i = 0; i < accounts.length; i++){
    if (accounts[i].account === currentUser.account){
      return accounts[i].mountpoint;
    }

    return "/";
  }
}
