import path from 'path'
import express from 'express'
import { fileURLToPath } from 'url'

const app = express()
const root = path.join(fileURLToPath(import.meta.url))
const users = [{id: "1", name: "Haruno Sakura"}, {id: "2", name: "Hyooga Neji"}, {id: "3", name: "Hatake Kakashi"},]
app.use(express.json())
app.use(express.static(path.join(root, 'public')))

app.get('/express', (req, res)  => {
    res.send("Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.")
})

app.get('/greetings', (req, res)  => {
    res.send("Helló, Bite Gergő Máté")
})

app.get('/nodejs', (req, res)  => {
    res.send("A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.")
})

app.get('/', (req, res) =>{
    res.sendFile(root, 'index.html')
})

app.get('api/users', (req, res) =>{
    res.send(users)
})

app.get('api/users:id', (req, res) =>{
    res.send(users)
})

app.get('api/users', (req, res) =>{
    res.send(users)
})

app.get('api/users:id', (req, res) =>{
    res.send(users)
})

app.get('api/users:id', (req, res) =>{
    res.send(users)
})

app.listen(3000, () =>{console.log(`sserver is listen on port 3000`)})