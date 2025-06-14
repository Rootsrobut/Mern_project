import dotenv from "dotenv";
dotenv.config();

import { MailtrapClient } from "mailtrap";

// Get token from env or fallback (not recommended for production)
const TOKEN = process.env.MAILTRAP_TOKEN || "6eda9efe94ce413ea78815ae2b846056";
console.log("Mailtrap Token:", TOKEN);

export const client = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "laxmibgs7667@gmail.com",
  },
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);
