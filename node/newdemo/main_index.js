var fs=require("fs");
var url=require("url");

exports.goIndex=function (res) {
    var pathname=__dirname+"/static/"+url.parse("index.html").pathname;
    var indexPage=fs.readFileSync(pathname,"utf-8");
    res.writeHead(200,{"content-type":"text/html"});
    res.write(indexPage)
    res.end();
}