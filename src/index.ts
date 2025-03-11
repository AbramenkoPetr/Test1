import express from "express";
//import  undici-types from "undici-types";
import { PostgresDataSource } from "./PostgresDataSource";
import { Requests } from "./observation.entity";
const fs = require("fs");
// fileUpload = require('express-fileupload')



const app = express();

const PORT = 3000;

app.use(express.json());  // Готов принять JSON

//app.use(express.static(__dirname + '/public'));
app.get("/", function(req, res) {
  console.log("Something was catched!" + req.method, __dirname);
  res.sendFile('/index.html', {root: __dirname });
});
//app.use(express.urlencoded({ extended: true }));
//app.get("/", (req, res) => {res.send("Hello from server Petr3!")});
//app.get("/", (req, res) => {res.send("Hello from server Petr3!")});

app.post('/create-observation', (req, res) => {
    res.send(`data: ${JSON.stringify(req.body)}`);  // Теперь в req.body – данные от клиента
    const req_body = req.body;
    console.log(req_body.status);
    console.log(req.body);
  });

app.listen(PORT, () => console.log(`⚡Server is running here 👉 https://localhost:${PORT}`));



//console.log('Hello World!')