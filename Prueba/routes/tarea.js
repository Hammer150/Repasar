const express = require('express')
const upload = require('../libs/storage')
const {addTarea} = require('../controllers/tareaControllers')
const api = express.Router()

const Tareas = require('../models/tarea')

api.post('/nueva-tarea', upload.single('image'), addTarea)

//get all data
api.get('/tarea', async(require, respuesta)=>{
    try{
        TareaBD = await Tareas.find()
        respuesta.json(TareaBD)
    } catch (error) {
        return respuesta.status(400).json({
            mensaje:'no se puede ver las tareas sigue participando', error
        })
    }
})

//get params id esto servira para el front con vue

api.get('/tarea/:id', async(require, respuesta)=>{
    const _id =require.params.id
    try{
        const TareaBD = await Tareas.findOne({_id})
        respuesta.json(TareaBD)
    }catch (error){
        return respuesta.status(400).json({
            menssaje: 'no se encuentra la tarea con ese id, sigue participando',
            error
        })
    }
})

//delete de una tarea por id 

api.delete('/tarea/:id', async(require, respuesta)=>{
    const _id = require.params.id
    try {
        const TareaBD =await Tareas.findByIdAndDelete({_id})
        respuesta.json(TareaBD)
    }catch (error){
        return respuesta.status(400).json({
            mensaje: 'por favor no cometer el error de nuevo, siga el buen camino' , error
        })
    }
})

//put aqui se actualiza a travez de un body

api.put('/tarea/:id', async(require, respuesta)=>{
    const body = require.body
    const _id = require.params.id
    try {
        const TareaBD = await Tareas.findByIdAndUpdate(_id,body, {new:true})
        respuesta.json(TareaBD)
    }catch (error) {
        return respuesta.status(400).json({
            mensaje: 'es mas que suficiente, es toxic@ , la practica hace al maestro' , error
        })
    }
})

module.exports = api 