var http = require("http");
var fs = require("fs");
var os = require("os");
var ip = require("ip");
const { ENETUNREACH } = require("constants");

cpus = os.cpus(),
cpuCount = cpus.length;
// uptime function found on stackoverflow. Cant get it to output correctly though

function format(seconds){
    function pad(s){
        return (s < 10 ? '0' : '') + s;
    }
    var hours = Math.floor(seconds / (60*60));
    var minutes = Math.floor(seconds % (60*60) / 60);
    var seconds = Math.floor( seconds % 60);
    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}
var uptime = process.uptime();

http.createServer(function(req, res){
    if(req.url === "/"){
        fs.readFile("./public/index.html", "UTF-8", function(err, body){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(body);
        });
    }
    else if(req.url.match("/sysinfo")){
        myHostName=os.hostname();
        html=`
        <!DOCTYPE html>
        <html>
        <head>
        <title>Node Js Response</title>
        </head>
        <body>
        <p>Hostname: ${myHostName}</p>
        <p>IP: ${ip.address()}</p>
        <p>Server Uptime: ${format(uptime)} </p>
        <p>Total Memory: ${os.totalmem() / 1000000} MB</p>
        <p>Free Memory: ${os.freemem() / 1000000} MB </p>
        <p>Number of CPUs: ${cpuCount} </p>
        </body>
        </html>`
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(html);
    }
    else{
        res.writeHead(404,{"Content-Type": "text/plain"});
        res.end(`404 File Not Found at ${req.urel}`);
    }
}).listen(3000)
console.log("Server listening on port 3000");


