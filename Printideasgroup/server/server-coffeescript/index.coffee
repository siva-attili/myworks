express = require("express")
app = null
bodyParser = require('body-parser')
serveStatic = require('serve-static')
staticPath = require("path").normalize("../client/website/dist")
favicon = require('serve-favicon')
methodOverride = require('method-override')
cors=require('cors')

port = 3001
nodeEmail = require("./services/NodeEmailer")

#Express setup
app = express()

# parse JSON, text and url params
app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.text({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(cors())


#app.use(favicon(rootPath+ '/public/img/favicon.ico', { maxAge: 2592000000 }));
app.use(serveStatic(staticPath))
app.use(methodOverride())
app.get("/",(req,res)->
  console.log staticPath
  res.send("ok")
)

app.post("/contactEmail",(req,res)->

  cb = (err, info)->
    if err
      console.log err
    console.log info
    res.send("Contact Email request recieved")

  console.log(req.body)
  messageBody = "Name:#{req.body.name}<br/>
  Email:#{req.body.email}<br/>
  Mobile:#{req.body.number}<br/>
  Description:#{req.body.description}<br/>
  "
  nodeEmail.qSendNodeEmailer("#{messageBody}", cb)

)

app.listen(port,(err)->
  if err
    console.log "Server failed to start"
    return
  console.log "Server is listening on port #{port}"

)
