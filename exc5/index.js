const fs = require('fs')

const data = "Apendendo NODE"

fs.writeFile('arquivo.txt', data, (error) => {
    if (error) throw error
    console.log("Arquivo criado!!!!")
})