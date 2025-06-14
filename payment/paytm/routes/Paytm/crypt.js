const crypto = require('crypto');
const config = require('./config');

function encrypt(data) {
  const cipher = crypto.createCipher('aes-256-cbc', config.MERCHANT_KEY);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decrypt(encryptedData) {
  const decipher = crypto.createDecipher('aes-256-cbc', config.MERCHANT_KEY);
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

module.exports = { encrypt, decrypt };