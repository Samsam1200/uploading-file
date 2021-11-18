const express = require('express')//jebna express
const app=express()

const db = require('./config/db') //jebna el mongoose eli howa yorbet binet el serveur wel base de données
db();


const cors = require('cors')
app.use(cors())
app.use(express.json())


const user = require('./route');
app.use('/app',user)        


app.listen(8000,()=>{     
console.log('server yekhdem')


})