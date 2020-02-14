require('dotenv').config()
const app = require('./app')
const connectDb = require('./db/mongodb')
const cors = require('cors')
const express = require('express')
const { appConfig, dbConfig } = require('./config')

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended:true}))

async function initApp(appConfig, dbConfig){
    try{
        await connectDb(dbConfig)
        app.listen(appConfig.port, () => console.log(`listen on ${appConfig.port}`))
    }catch(e){
        console.error(e)
        process.exit(0)
    }
}
initApp(appConfig, dbConfig)