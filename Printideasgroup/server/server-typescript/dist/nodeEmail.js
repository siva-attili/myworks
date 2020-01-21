"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const smtpParams = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "lk.piskool@gmail.com",
        pass: "/P!Skool_1026$"
    }
};
const message = {
    from: "lk.piskool@gmail.com",
    to: "lk.react.developer@gmail.com",
    subject: "Contact Email from lk-piskool"
};
const transport = nodemailer_1.default.createTransport(smtpParams);
exports.qSendNodeEmailer = (messageHtmlBody, cb) => {
    message['html'] = messageHtmlBody;
    transport.sendMail(message, cb);
};
//# sourceMappingURL=nodeEmail.js.map