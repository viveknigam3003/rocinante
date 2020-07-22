import axios from "axios";
import { Cookies } from "react-cookie";
import { cdToArray } from "./Files";
import { getCurrentAccountConfig } from "../Utils/User";
const cookies = new Cookies();

/**
 * Attempts to handle FILE Metadata from Rucio-Server
 * @param {String} filePath RucioFS Path for File
 */
export function getFileMetadata(filePath) {
  const path = cdToArray(filePath);

  const pathObject = {
    mountpoint: path[0],
    server: path[1],
    scope: path[2] || null,
    did: path[path.length - 1],
  };

  const currentAccountConfig = getCurrentAccountConfig(pathObject.server);
  
  const payload = {
    certlocation: currentAccountConfig.certlocation,
    serverHost: currentAccountConfig.server.host,
    scope: pathObject.scope,
    did: pathObject.did,
    token: "",
  };

  try {
    payload.token = cookies.get(currentAccountConfig.server.name);
  } catch {
    return "No Token Found!";
  }

  try {
    const response = axios.post("/metadata", {
      payload,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (err) {
    return console.log(err);
  }
}

/**
 * Converts a long string of bytes into a readable format e.g KB, MB, GB, TB, YB
 * 
 * @param {Int} num The number of bytes.
 */
export function readableBytes(bytes) {
    var i = Math.floor(Math.log(bytes) / Math.log(1024)),
    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + sizes[i];
}