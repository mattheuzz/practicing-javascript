const express = require("express")
const app = express()
const axios = require('axios')

function convertFahrenheit (celsius) {
    const temperature = celsius * 1.8 + 32
    return temperature
}  

app.get("/", function (req, res) {
  let data = new Date().toLocaleDateString("pt-BR")
  let time = new Date().toLocaleTimeString("pt-BR")
  
  axios.get("https://api.hgbrasil.com/weather?woeid=455931")
    .then((response) => {
      const { temp } = response.data.results
  
      const infoDateTemp = [
        {
          date: data,
          hour: time,
          fahrenheit: convertFahrenheit(temp),
        }
        ]
  
      res.send(infoDateTemp)
    })
    .catch((error) => {
      res.send(error)
  })
})

app.listen(3000)
