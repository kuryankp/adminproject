const express = require('express')
const app = express()
const port = 3000

const pgp = require("pg-promise")(/*options*/);
const db = pgp("postgres://kuryandb:228@database:5432/datakkp");

app.get('/api/test', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send("test")
})


app.listen(port, () => {
    console.log(`Listening at port: ${port}`)
})