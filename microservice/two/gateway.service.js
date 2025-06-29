import express from "express";
import proxy from "express-http-proxy";
const app = express();
app.use(
  "/stress-testing",
  proxy("http://localhost:3001", {
    proxyReqPathResolver: (req) => {
      return `${req.url}`;
    },
  })
);

app.use(
  "/",
  proxy("http://localhost:3000", {
    proxyReqPathResolver: (req) => {
      return `${req.url}`;
    },
  })
);
