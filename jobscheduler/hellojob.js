const fs = require('fs');
const path = require('path');

function runJob(output = "console") {
  const message = `Hello World - ${new Date().toLocaleString()}`;

  if (output === "file") {
    const logPath = path.join(__dirname, 'hello.log');
    fs.appendFileSync(logPath, message + '\n');
  } else {
    console.log(message);
  }
}

module.exports = runJob;
