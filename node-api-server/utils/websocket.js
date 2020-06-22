var wsServer = null;
var num = 0
function init(ws) {
  wsServer = ws;
  wsServer.on('error', onError); // 监听对应事件。
  wsServer.on('open', onOpen);
  wsServer.on('close', onClose);
  wsServer.on('message', onMessage);
}
function send(message) {
  if (!wsServer) return;
  wsServer.send(message);
  return
}

function onError() {
  console.log("onError")
  return
}
function onOpen() {
  console.log("onOpen")
  return
}
function onClose() {
  console.log("onClose")
  return
}
function onMessage() {
  console.log("onMessage1")
  num+=1
  send(num)
  return
}


module.exports = { send, init, onMessage };
