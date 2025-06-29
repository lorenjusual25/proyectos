const express = require('express')
const path = require('path')
const fs = require('fs');

const app = express();
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
const port = 3000;
const usersDir = path.join(__dirname,'users.json')

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'public','htmls','index.html'))
})
app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname,'public','htmls','login.html'))
})
app.get('/signup', (req,res) => {
    res.sendFile(path.join(__dirname,'public','htmls','signup.html'))
})
app.post('/signup',(req,res) => {
    const newUser = req.body
    console.log('Nuevo usuario: ',newUser)
    if (!newUser.username || !newUser.email || !newUser.password)
        return res.status(400).json({ error: 'the fields are missing.' });
    if (exist(newUser)){
        alert('Este usuario ya existe')
        return res.status(400).json({error: 'user already exists'})
    }
    const users = getUsers()
    users.push(newUser)
    addNewUser(users)
    res.json({msg: 'user added successfully'})
})
app.post('/login',(req,res) => {
    const data = req.body
    console.log('Nuevo inicio de sesion: ',data)
    if(exist(data)){
        console.log('Login realizado con exito')
        res.json({msg: 'successful login'})
    }
    else {
        res.status(401).json({error: 'unsuccessful login'})
    }
})
app.use((req,res) => {
    res.status(404).sendFile(path.join(__dirname,'public','htmls','error404.html'))
    console.error('Page not found')
})
function addNewUser (users) {
    fs.writeFileSync(usersDir,JSON.stringify(users))
}
function exist (user) {
    const users = getUsers()
    const aux = users.find(u => u.username === user.username && u.email === user.email && u.password === user.password)
    if (aux)
        return true
    return false
}
function getUsers() {
    try{
        return JSON.parse(fs.readFileSync(usersDir).toString('utf8'))
    }
    catch{
        return []
    }
}
app.listen(port)
console.log(`Server on port ${port}`)