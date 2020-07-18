import axios from "axios";

export function lsFolder(folder) {
  try {
    const response = axios.post("http://localhost:3004/getfiles", {
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
