const fs = require("fs");

function getFiles(folder) {
  let list = [{name: "."}, {name: ".."}];
  let files = [];
  let folders = [];

  try {
    fs.readdirSync(folder).forEach((file) => {
      let statsObj = fs.statSync(folder + "/" + file);
      statsObj.isFile()
        ? files.push({ name: file, type: "FILE" })
        : folders.push({ name: file, type: "FOLDER" });
    });
  } catch {
    console.log(`[INFO] Folder not found at ${folder}`);
    return null;
  }
  console.log(`[INFO] Files retrieved from ${folder}`);

  list = list.concat(files, folders);
  return list;
}

exports.getFiles = getFiles;
