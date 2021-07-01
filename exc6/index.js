const express = require('express')
const app = express()

app.use(express.json())

app.post('/', (req, res) => {
    let { velocidadepermitida, velocidadecarro } = req.body
    const info = [
        {
            traffic_ticket: true,
            velocidadeultrapassada: velocidadecarro,
            porecentagemultrapassada: 0
        }
    ]
    const VelocityExceeded = (velocidade, velocidadepermitida) => {
        let porecentagemultrapassada = ((velocidade - velocidadepermitida) / velocidadepermitida) * 100
        if (porecentagemultrapassada >= 10) {
            info.map(i => (
                i.traffic_ticket = true,
                i.velocidadeultrapassada = velocidade,
                i.porecentagemultrapassada = porecentagemultrapassada.toFixed(2)
            ))
            res.json(info)
        } else {
            info.map(i => (
                i.traffic_ticket = false,
                i.velocidadeultrapassada = velocidade,
                i.porecentagemultrapassada = porecentagemultrapassada.toFixed(2)
            ))
            res.json(info)
        }
    }
    VelocityExceeded(velocidadecarro, velocidadepermitida)
})

app.listen(3000)