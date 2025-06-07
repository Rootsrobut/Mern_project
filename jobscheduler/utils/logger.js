const fs = require("fs");
const path = require("path");

function logToFile(text) {
  const filePath = path.join(__dirname, "../hello.log");
  fs.appendFileSync(filePath, text + "\n");
}

module.exports = logToFile;
