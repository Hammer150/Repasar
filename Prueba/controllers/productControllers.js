const Product = require('../models/product')

async function addProduct(req, res){
    try{
        const{
            name,
            size,
            unitaryPrice,
            descripcion
        } = req.body

        const product = Product({
            name,
            size,
            unitaryPrice,
            descripcion
        })

        if(req.file){
            const { filename } = req.file
            product.setImgUrl(filename)
        }

        const productStored = await product.save()

        res.status(201).send({productStored})
    }catch(e){
        res.status(500).send({message: e.message})
    }
}

module.exports = {
    addProduct
}