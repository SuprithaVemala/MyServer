"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var server = http_1.default.createServer(function (req, res) {
    var _a, _b, _c, _d, _e, _f;
    if (req.url) {
        var myParams = new URLSearchParams(req.url.split('?')[1]);
        if (req.url === "/books" && req.method === "GET") {
            res.end("get request");
        }
        else if (req.url === "/books" && req.method === "POST") {
            res.end("post request");
        }
        else if (((_a = req.url) === null || _a === void 0 ? void 0 : _a.match(/\/books\/[0-9]+/)) && req.method === "GET") {
            var id = (_b = req.url) === null || _b === void 0 ? void 0 : _b.split("/")[2];
            res.end("get book by id=" + id);
        }
        else if (myParams.has('q') && req.method === "GET") {
            res.end("simple text=" + myParams.get("q"));
        }
        else if (myParams.has("author") && req.method === "GET") {
            res.end("simple text=" + myParams.get("author"));
        }
        else if (myParams.has("price") && req.method === "GET") {
            res.end("simple text=" + myParams.getAll("price"));
        }
        else if (((_c = req.url) === null || _c === void 0 ? void 0 : _c.match(/\/books\/[0-9]+/)) && req.method === "PUT") {
            var id = (_d = req.url) === null || _d === void 0 ? void 0 : _d.split("/")[2];
            res.end("get book by id=" + id);
        }
        else if (((_e = req.url) === null || _e === void 0 ? void 0 : _e.match(/\/books\/[0-9]+/)) && req.method === "DELETE") {
            var id = (_f = req.url) === null || _f === void 0 ? void 0 : _f.split("/")[2];
            res.end("get book by id=" + id);
        }
        else
            res.end("URL not found");
    }
});
var port = 5000;
server.on("error", function (err) { return console.log(err.message); });
server.listen(port, function () {
    return console.log("Server listening at http://localhost:" + port);
});
