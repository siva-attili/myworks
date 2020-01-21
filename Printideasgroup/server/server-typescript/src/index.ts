import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import serveStatic from 'serve-static';
import favicon from 'serve-favicon';
import methodOverride from 'method-override';
var staticPath=require('path').normalize("../../client/website/dist");

import {qSendNodeEmailer} from './nodeEmail';
const port=3002;

//Express Setup
const app=express();

//pars json, text, url params
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.text({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

//app.use(favicon(rootPath+ '/public/img/favicon.ico', { maxAge: 2592000000 }));
app.use(serveStatic(staticPath));
app.use(methodOverride());
app.get("/",(req,res)=>{
    console.log(staticPath);
    res.send("ok");
});

app.post("/contactEmail",(req,res)=>{
    const cb = (err, info)=>{
        if(err){
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
  qSendNodeEmailer(messageBody, cb);
});

app.listen(port,(err)=>{
    if(err){
        console.log("Server failed to start");
    }
    return console.log(`Server is listening on port ${port}`)
});