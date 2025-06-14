module.exports = {
  MID: 'YOUR_MERCHANT_ID',
  MERCHANT_KEY: 'YOUR_MERCHANT_KEY',
  WEBSITE: 'WEBSTAGING', // Use 'DEFAULT' in production
  CHANNEL_ID: 'WEB',
  INDUSTRY_TYPE_ID: 'Retail',
  CALLBACK_URL: 'https://yourdomain.com/paytm/callback',
  TXN_URL: 'https://securegw-stage.paytm.in/theia/processTransaction', // Staging
  // For production: https://securegw.paytm.in/theia/processTransaction
};