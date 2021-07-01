/* const express = require('express')
const app = express()

app.get("/", function(req, res){
    res.send("Hello")
})
let desconto = 100

const salarioLiquido = (salario) => salario - desconto

app.get("/salario/:salariobruto", function(req, res){
    res.end(`ola, seu salario bruto ${req.params.salariobruto} e seu salario liquido ${salarioLiquido(req.params.salariobruto)}` )
})
app.listen(3000) */


const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors())


app.post('/', (req, res)=>{
    const salary = req.body.salary
    const liquidSalary = (sal) => {
        sal -= sal * 0.1
        return sal.toFixed(2)
    }

    res.send({
        "salary": liquidSalary(salary)
    })
})


app.listen(3000)
