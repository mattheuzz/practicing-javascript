const express = require("express")
const app = express()

const time = new Date().toLocaleTimeString('pt-br')
const data = new Date().toLocaleDateString('pt-br')


app.get('/', function(req, res){
    res.send(`Data: ${data} ; Hora: ${time}`)
})

app.listen(3000)


