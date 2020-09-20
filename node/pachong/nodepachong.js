const http = require("http");
const fs = require("fs");
const request = require("request");
const path = require("path");
const config = require("./config");
const analyze = require("./analyze");

const mkdir = require("./mkdir");

function start() {
  mkdir("./img");
  request(config.url, function(err, res, body) {
    console.log("start");
    if (!err && res) {
      console.log("start");
      analyze.findImg(body, downLoad);
    }
  });
}

function downLoad(imgUrl, i) {
  let ext = imgUrl.split(".").pop();
  request(imgUrl).pipe(
    fs.createWriteStream(path.join(config.imgDir, i + "." + ext), {
      enconding: "binary"
    })
  );

  console.log(i);
}
start();
