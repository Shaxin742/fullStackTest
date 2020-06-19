var wsServer = null;

function init(ws) {
  wsServer = ws;
  console.log(2, wsServer)
  wsServer.on('error', onError); // 监听对应事件。
  wsServer.on('open', onOpen);
  wsServer.on('close', onClose);
  wsServer.on('message', onMessage);
}
function send(message) {
  if (!wsServer) return;
  wsServer.send(message);
}

function onError() {
  console.log("onError")
}
function onOpen() {
  console.log("onOpen")
}
function onClose() {
  console.log("onClose")
}
function onMessage() {
  console.log("onMessage1")
  send(123123)
}


module.exports = { send, init, onMessage };
