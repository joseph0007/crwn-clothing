const express = require("express");
const dotenv = require("dotenv");
const compression = require("compression");
const cors = require("cors");
const enforce = require("express-sslify");

const app = express();

dotenv.config({
  path: `${__dirname}/.env`,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  app.use(cors());
  app.use(compression());
  // trust proto header is to trust the reverse proxy header
  app.use(enforce.HTTPS({ trustProtoHeader: true }));

  app.use(express.static(`${__dirname}/client/build`));

  app.get("*", (req, res) =>
    res.sendFile(`${__dirname}/client/build/index.html`)
  );
}

app.listen(port, (error) => {
  if (error) console.log(error);

  console.log("server started!");
});
