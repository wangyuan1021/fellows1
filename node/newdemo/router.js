//路由功能
var ParseDns=require("./parse_dns.js");
var MainIndex=require("./main_index.js");

exports.router=function (req,res,pathname) {
    
    switch (pathname){
        case "/":
            MainIndex.goIndex(res);
            break;
        case"/parse":
            ParseDns.parseDns(req,res);
            break;
        default:
            res.writeHead(404,{"content-type":"text/plain"});
            res.end("the page is gone");

    }
}