import { getCurrentAccountConfig } from "./User";
import { Cookies } from "react-cookie";
import axios from "axios";
const cookies = new Cookies();

/**
 * GETs all the Config sections from the `server`. Works only for ADMIN accounts
 * @param {String} server Rucio Host
 */
export async function getConfig(server) {
  const currentAccountConfig = getCurrentAccountConfig(server);
  
  const payload = {
    certlocation: currentAccountConfig.certlocation,
    server: currentAccountConfig.server,
    token: "",
  };

  try {
    payload.token = cookies.get(currentAccountConfig.server.name);
  } catch (err) {
    return 401;
  }

  try {
    const response = axios.post("/config", {
      payload,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (err) {
    return 500;
  }
}
