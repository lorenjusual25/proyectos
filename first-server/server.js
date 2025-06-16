const express = require('express')
const fs = require('fs')

const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.sendFile('./public/index.html',{root: __dirname}) //root indica que lee el archivo desde este directorio
})
app.get('/login', (req,res) => {
    res.sendFile('./public/login.html',{root: __dirname})
})
app.use((req,res) => {
    res.status(404).sendFile('./public/error404.html',{root: __dirname})
    console.error('Page not found')
})
app.listen(port)
console.log(`Server on port ${port}`)