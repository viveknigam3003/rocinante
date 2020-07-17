const fs = require("fs");

function getFiles(folder) {
  let list = [];
  fs.readdirSync(folder).forEach((file) => {
    list.push(file);
  });
  console.log(`[INFO] Files retrieved from ${folder}`)
  return list;
}

exports.getFiles = getFiles;
