import express from  "express";
import morgan from 'morgan';
const app = express();
const app1 = express();
app.use(morgan('dev'));
app1.use(morgan('dev'));

app.get("/", (req, res) => {
  for (let i = 0; i < 10000000000; i++) {}
  return res.send("Hello World");
});

app1.get("/stress-testing", (req, res) => {
  for (let i = 0; i < 10000000000; i++) {}
  return res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
app1.listen(3001, () => {
  console.log("Server is running on port 3001");
});


