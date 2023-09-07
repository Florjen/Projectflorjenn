//File yne startues 
//Importojme dependencies 
import express, { urlencoded } from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'
//importojme apiRoutes
import apiRoute from './routes/apiRoutes.js'
//importojme admin route
import adminRoutes from './routes/adminRoutes/index.js'

//importojme daatabasen 
import sequelize from './config/connectDB.js'
//testojme lidhjen me databasen dhe sinkronizpjme databasen 
try {
    //sync sinkronizon model schema me databasen alter:true force:false force:true
await sequelize.sync()
await sequelize.authenticate()
console.log("Database u lidh me sukses")
} catch ( err) {
    console.log(err)
    process.exit(1)
}

//Inicializojme backend app
const app = express()


//MIIDLEWARES
app.use(cors({
    origin:['http://localhost:3000',"wwww.webittjeter.al"],
    credentials:true,
    optionsSuccessStatus:200
}))
//deklarojme folderin public ku do te ruajme fotot
//__filename filename aktual index.js 
const __filename = fileURLToPath(import.meta.url)
//__dirname location of the actual root directory
const __dirname = path.dirname(__filename)
//console.log(__filename,"filename",__dirname)
//i themi ekspresit qe te perdore kete direktori 

app.use(express.static(path.join(__dirname,'public')))
//Na mundeson te dalin te dhenat ne req.body
app.use(express.json())
//express.urlencoded na mundeson te pranojme data files shembull .jpg .jpeg
app.use(express.urlencoded({extended:true}))


//ROUTES
//Home route //http://localhost:5000
app.get("/",(req,res) => {
res.send("Serveri eshte startuar ne porten 5000")
})
app.use('/api',apiRoute)
//Admin Routes
app.use('/babaxhani',adminRoutes)

//Porta e serverit {backend app}
app.listen(5000)