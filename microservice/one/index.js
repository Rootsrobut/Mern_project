import express from  "express";
import morgan from 'morgan';
const app = express();
app.use(morgan('dev'));

app.get("/", (req, res) => {
  for (let i = 0; i < 10000000000; i++) {}
  return res.send("Hello World");
});
app.get('/stress-testing',(req, res) => {
    for (let i = 0; i < 1000000000; i++) {}
    return res.end('Stress test completed');
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});