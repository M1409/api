const express = require('express')
const dataroute = require('./src/data/routes')

const app = express()
const port = 666

app.use(express.json())

app.get("/", (req,res) =>{
    res.send('As 666 da noite eu te conto')
})

app.use('/api/v1/table1',dataroute)

app.use('/fds', (req,res) =>{
    res.send("fds")
})


app.listen(port, () => console.log(`${port}`))


