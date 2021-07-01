const express = require('express')
const app = express()

app.get("/", function(req, res){
    res.send("Hello")
})
let desconto = 100

const salarioLiquido = (salario) => salario - desconto

app.get("/salario/:salariobruto", function(req, res){
    res.end(`ola, seu salario bruto ${req.params.salariobruto} e seu salario liquido ${salarioLiquido(req.params.salariobruto)}` )
})
app.listen(3000)