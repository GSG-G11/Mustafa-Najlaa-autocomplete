/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const fs = require("fs");
const path = require("path");
const axios = require("axios");

const router = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/" && method === "GET") {
    const pathFile = path.join(__dirname, "..", "public", "index.html");
    fs.readFile(pathFile, (err, data) => {
      if (err) {
        res.writeHead(500, "Error Internal Server");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (url === "/js/main.js") {
    const pathStyle = path.join(__dirname, "..", "public", "js", "main.js");
    fs.readFile(pathStyle, (err, data) => {
      if (err) {
        res.writeHead(500, "Error Serrver");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.end(data);
      }
    });
  } else if (url === "/css/main.css") {
    const pathStyle = path.join(__dirname, "..", "public", "css", "main.css");
    fs.readFile(pathStyle, (err, data) => {
      if (err) {
        res.writeHead(500, "Error Serrver");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      }
    });
  } else if (url.includes("country") && method === "GET") {
    const pathStyle = path.join(__dirname, "country.json");
    fs.readFile(pathStyle, (err, data) => {
      //   const ob =  JSON.stringify(data)
      if (err) {
        res.writeHead(500);
        res.end("error server");
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data);
        console.log(data);
      }
    });
  } else if (url.includes("/api")) {
    const imgKey='25715508-30ede2cb1753fb52763f43dcd'
    const word = url.split('/')[2];
    axios
      .get(
       `https://pixabay.com/api/?key=${imgKey}&q=${word}&image_type=photo`
      )
      .then((response) => {
        console.log(response)
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    res.writeHead(404);
    res.end("notfound");
  }
};
module.exports = router;
