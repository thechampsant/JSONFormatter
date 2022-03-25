var express = require('express')
var app = express()

const port = 4000

var fs = require('fs')
var dataJson = ''

app.get('/json',(req,res) => {
    fs.readFile('json.text','utf-8',(err,data) => {
        if(!err)
            dataJson = data.replace(/\\/g, '')
            dataJson = dataJson.replace(/\\/g, '')
    
        fs.writeFile('ResultJson.json',dataJson,(err) => {
            if(!err)
                console.log('success');
            res.setHeader('Content-Type', 'application/json');
            res.send(dataJson)
        })
    })
})

app.listen(port,() => {
    console.log('listening');
})