const express = require('express') 
const app = express() 

const trabalhador = {
    name: "Fulano",
    last_name: "Ciclano",
    birthday: "01/01/1990",
    age: 30,
    department: "Software Engineering"
 }

var tamanho= 0;  
for (var i in trabalhador) {
    if (trabalhador.hasOwnProperty(i)) {
        tamanho++;
    }
}

app.get('/', function (req, res) {
  res.send(`O ultimo nome é ${trabalhador.last_name} e o objeto é de tamanho ${tamanho}`)
})
app.listen(3000)