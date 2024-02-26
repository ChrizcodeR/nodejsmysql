import express from 'express'
import {database} from './db.js'

const app = express()

app.get('/', (req, res)=> {
    res.send('Welcome to server nodejs with mysql railway')

})

app.get('/ping', async (req, res)=> {
    const [result] = await database.query(`SELECT "hello word" as RESULT`);
    console.log(result)
    res.json(result[0])
})

app.get('/create', async (req, res)=> {
     const result = await database.query(`INSERT INTO users(name) VALUES ("Chriz")`);
     res.json(result)
     console.log(res)
   
})

app.listen(3001)
console.log('Server on port 3001')

