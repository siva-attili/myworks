nodemailer = require("nodemailer")

smtpParams = {
  host : "mail.printideas.in",
  port: 465,
  secure:true,
  auth: {
    user: "site@printideas.in",
    pass: "8M?T@cv-Wc^D"
  }
}
message = {
  from: "site@printideas.in"
  to: "contact@printideas.in"
  subject: "Contact Email from printideas"
}

transport = nodemailer.createTransport(smtpParams)

qSendNodeEmailer = (messageHtmlBody, cb)->
  message.html = messageHtmlBody
  transport.sendMail(message, cb)

module.exports = {
    qSendNodeEmailer: qSendNodeEmailer
}
