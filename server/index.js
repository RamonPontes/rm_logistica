import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World')
}); 

app.listen(3001);