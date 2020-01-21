"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const serve_static_1 = __importDefault(require("serve-static"));
const method_override_1 = __importDefault(require("method-override"));
var staticPath = require('path').normalize("../../client/website/dist");
const nodeEmail_1 = require("./nodeEmail");
const port = 3002;
//Express Setup
const app = express_1.default();
//pars json, text, url params
app.use(body_parser_1.default.json({ limit: '10mb' }));
app.use(body_parser_1.default.text({ limit: '10mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '10mb', extended: true }));
app.use(cors_1.default());
//app.use(favicon(rootPath+ '/public/img/favicon.ico', { maxAge: 2592000000 }));
app.use(serve_static_1.default(staticPath));
app.use(method_override_1.default());
app.get("/", (req, res) => {
    console.log(staticPath);
    res.send("ok");
});
app.post("/contactEmail", (req, res) => {
    const cb = (err, info) => {
        if (err) {
            console.log(err);
        }
        console.log(info);
        res.send("Contact Email request recieved");
    };
    console.log(req.body);
    const messageBody = `Name:${req.body.name}<br/>
  Email:${req.body.email}<br/>
  Mobile:${req.body.number}<br/>
  Description:${req.body.description}<br/>`;
    nodeEmail_1.qSendNodeEmailer(messageBody, cb);
});
app.listen(port, (err) => {
    if (err) {
        console.log("Server failed to start");
    }
    return console.log(`Server is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map