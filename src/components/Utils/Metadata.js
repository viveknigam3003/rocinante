import axios from "axios";
import { Cookies } from "react-cookie";
import { cdToArray } from "./Files";
import { getCurrentAccountConfig } from "../Utils/User";
const cookies = new Cookies();

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

  console.log(pathObject);

  try {
    payload.token = cookies.get(currentAccountConfig.server.name);
  } catch {
    return "No Token Found!";
  }

  try {
    const response = axios.post("http://localhost:3004/metadata", {
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
