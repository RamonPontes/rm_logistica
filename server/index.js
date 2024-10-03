import express from 'express'
import cors from 'cors'

function sqlGetTraking(trakingCode) {
    const resp = [
        {
            data: '24/09 22:32',
            origen: 'PontaGrossa',
            status: 'Transferencia',
            destino: 'Curitiba'
        },
        {
            data: '25/09 14:20',
            origen: 'Curitiba',
            status: 'Em trânsito',
            destino: 'São Paulo'
        }
    ];

    return resp
}

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', function (req, res) {
    res.send('Hello World')
}); 

app.get('/traking', function (req, res) {
    if(req.query.trakingCode) {
        res.status(200).send(sqlGetTraking(req.query.trakingCode))
    } else {
        res.status(404).send("Código de rastreio não encontrado")
    }
})

app.listen(3001);