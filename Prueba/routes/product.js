const express = require('express')
const upload = require('../libs/storage')
const { addProduct } = require('../controllers/productControllers')
const api = express.Router()

const Producto = require('../models/product')

api.post('/products', upload.single('image'), addProduct)
api.get('/producto', async(require,respuesta)=>{
    try{
        ProductoBD = await Producto.find()
        respuesta.json(ProductoBD)
    }catch(error){
        return respuesta.status(400).json({
            mensaje:'no funciona'
        })
    }
})
api.get('/producto/:id', async(require, respuesta)=>{
    const _id =require.params.id
    try{
        const ProductoBD = await Producto.findOne({_id})
        respuesta.json(ProductoBD)
    }catch (error){
        return respuesta.status(400).json({
            menssaje: 'no se encuentra la Producto con ese id, sigue participando',
            error
        })
    }
})
api.put('/producto/:id', async(require, respuesta)=>{
    const body = require.body
    const _id = require.params.id
    try {
        const ProductoBD = await Producto.findByIdAndUpdate(_id,body, {new:true})
        respuesta.json(ProductoBD)
    }catch (error) {
        return respuesta.status(400).json({
            mensaje: 'es mas que suficiente, es toxic@ , la practica hace al maestro' , error
        })
    }
})
api.delete('/producto/:id', async(require, respuesta)=>{
    const _id = require.params.id
    try {
        const ProductoBD =await Producto.findByIdAndDelete({_id})
        respuesta.json(ProductoBD)
    }catch (error){
        return respuesta.status(400).json({
            mensaje: 'por favor no cometer el error de nuevo, siga el buen camino' , error
        })
    }
})
module.exports = api