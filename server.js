const express = require('express')
const morgan = require("morgan")
const { createProxyMiddleware } = require('http-proxy-middleware');
const dataroute = require('./src/data/routes')

const app = express()
const port =  666

app.use(morgan('combined'))
app.use(express.json())


app.get("/", (req,res) =>{
    res.send('As 666 da noite eu te conto')
})

app.use('/api', dataroute, createProxyMiddleware({ target: 'http://localhost:666', changeOrigin: true }))

app.use('/fds', (req,res) =>{
    res.send("fds")
})

app.listen(port, () => console.log(`${port}`))



