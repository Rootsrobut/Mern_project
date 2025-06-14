const crypto = require('crypto');
const config = require('./config');

function generateChecksum(params, key) {
  const data = JSON.stringify(params);
  return crypto.createHmac('sha256', key).update(data).digest('hex');
}

function verifyChecksum(params, key, checksum) {
  const generatedChecksum = generateChecksum(params, key);
  return generatedChecksum === checksum;
}

module.exports = { generateChecksum, verifyChecksum };