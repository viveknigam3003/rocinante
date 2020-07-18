const fs = require("fs");

function getFiles(folder) {
  let list = [{name: "."}, {name: ".."}];
  try {
    fs.readdirSync(folder).forEach((file) => {
      let statsObj = fs.statSync(folder + "/" + file);
      statsObj.isFile()
        ? list.push({ name: file, type: "FILE" })
        : list.push({ name: file, type: "FOLDER" });
    });
  } catch {
    console.log(`[INFO] Folder not found at ${folder}`);
    return null;
  }
  console.log(`[INFO] Files retrieved from ${folder}`);

  return list;
}

exports.getFiles = getFiles;
