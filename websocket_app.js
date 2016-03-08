var ws = require('websocket.io')
  , http = require('http').createServer().listen(3000)
  , server = ws.attach(http)

var cot=0; 
var inc=2;
server.on('connection', function (client) {
  client.send("hello world");
  client.on('message', function () { });
  client.on('close', function () { });
  
  setInterval(function() {
      if(cot>=180)inc=-2;
      if(cot<=0)inc=2;
      cot+=inc;
      
      client.send(""+cot);
  },1000);
});