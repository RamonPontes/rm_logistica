import express from 'express'
import cors from 'cors'

function sqlGetTraking(trakingCode) {
    const resp = {
        '01': {
            data: '24/09 22:32',
            origen: 'PontaGrossa',
            status: 'Tranferencia',
            destino: 'Curitiba'
        }
    }    
}

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', function (req, res) {
    res.send('Hello World')
}); 

app.get('/traking', function (req, res) {
    if(req.body.trakingCode) {
        res.send(sqlGetTraking(req.body.trakingCode))
    } else {
        res.send("Codigo de rastreio invalido!")
        res.status(404)
    }
})

app.listen(3001);