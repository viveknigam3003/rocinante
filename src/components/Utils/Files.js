import axios from "axios";

export function lsFolder(folder) {
  axios
    .post("http://localhost:3004/getfiles", {
      folder,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => console.log(res.data.ls))
    .catch((err) => console.log(err));
}
