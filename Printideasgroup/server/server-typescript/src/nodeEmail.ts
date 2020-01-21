import nodemailer from 'nodemailer';

const smtpParams = {
    host:'smtp.gmail.com',
    port:465,
    secure:true,
    auth: {
        user: "lk.piskool@gmail.com",
        pass: "/P!Skool_1026$"
    }
};

const message = {
    from: "lk.piskool@gmail.com",
    to: "lk.react.developer@gmail.com",
    subject: "Contact Email from lk-piskool"
}

const transport = nodemailer.createTransport(smtpParams);

export const qSendNodeEmailer = (messageHtmlBody, cb)=>{
    message['html'] = messageHtmlBody;
    transport.sendMail(message, cb);
}