import express from 'express'
import cors from 'cors'

function sqlGetTraking(trakingCode) {
    const resp = {
        '01': {
            data: '24/09 22:32',
            origen: 'PontaGrossa',
            status: 'Tranferencia',
            destino: 'Curitiba'
        },
        '02': {
            data: '25/09 14:20',
            origen: 'Curitiba',
            status: 'Em trânsito',
            destino: 'São Paulo'
        }
    }    

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
        res.send(sqlGetTraking(req.query.trakingCode))
    } else {
        res.send("Codigo de rastreio não recebido")
        res.status(404)
    }
})

app.listen(3001);