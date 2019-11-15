var http = require('http');
var url = require('url');
let evaled = [];
var reEvaled;

class servator {
  constructor(){
const dfalt = "http://localhost:4000/1.2*1.2";
 

http.createServer(function (req, res) {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

  res.writeHead(200, {'Content-Type': 'text/html'});
  let myResp = req.url;
  let tempArr = [];
  tempArr = myResp.split('')
  if (tempArr[1] !== "f"){
    evaled = tempArr.slice(1);
    // console.log('evaled:', evaled)
    evaled = evaled.join('')
    reEvaled =  eval(evaled);
    // console.log('reEvaled:', reEvaled)
      res.write(JSON.stringify(reEvaled));
    }

  res.end();
})
// .listen(4000);
  }
}
module.exports = servator;

// const input = "http://localhost:4000/1.2*1.2";
// const newServ = new servator(input);
// console.log('newServ', newServ)
