const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const compiler = require("compilex");
const cors = require('cors');

const app = express();
app.use(bodyParser());
app.use(cors());

const option = {stats: true};
compiler.init(option);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/compilecode", function (req, res) {
    // console.log("body: ",req)
    const {code, lang} = req.body;

    if (lang === "C++") {
        const envData = { OS: "windows", cmd: "g++", options: {timeout: 10000}};
        compiler.compileCPP(envData, code, function (data) {
            console.log(data)
            res.send(data);
        });
    }
    if (lang === "Python") {
        const envData = { OS: "windows", options: {timeout: 10000}};
        compiler.compilePython(envData, code, function (data) {
            res.send(data);
        });
    }
    if (lang === "C") {
        const envData = { OS: "windows", cmd: "g++", options: {timeout: 10000}};
        compiler.compileCPP(envData, code, function (data) {
            res.send(data);
        });
    }
    if (lang === "C#") {
        const envData = { OS: "windows", options: {timeout: 10000}};
        compiler.compileCS(envData, code, function (data) {
            res.send(data);
        });
    }
    if (lang === "Java") {
        const envData = { OS: "windows", options: {timeout: 10000}};
        compiler.compileJava(envData, code, function (data) {
            res.send(data);
        });
    }
    if (lang === "Visual Basic") {
        const envData = { OS: "windows", options: {timeout: 10000}};
        compiler.compileVB(envData, code, function (data) {
            res.send(data);
        });
    }
});

app.get("/fullStat", function (req, res) {
    compiler.fullStat(function (data) {
        res.send(data);
    })
});

app.listen(8080);

compiler.flush(function () {
    console.log("All temporary files flushed!");
});