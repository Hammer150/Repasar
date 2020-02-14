const mongoose = require('mongoose')
const { appConfig } = require('../config')

const Schema = mongoose.Schema

const TareaSchema = Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    portada: String,
},{
    timestamps: true
})

TareaSchema.methods.portadaUrl = function portadaUrl(filename){
    const { host, port } = appConfig
    this.portada = `${host}:${port}/public/${filename}`
}

module.exports = mongoose.model('Tareas', TareaSchema)