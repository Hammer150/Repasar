const Tarea = require('../models/tarea')

async function addTarea(req, res){
    try{
        const{
            nombre,
            descripcion,
            precio,
        } = req.body

        const tarea = Tarea({
            nombre,
            descripcion,
            precio
        })

        if(req.file){
            const { filename } = req.file
            tarea.portadaUrl(filename)
        }

        const tareaStored = await tarea.save()

        res.status(201).send({tareaStored})
    }catch(e){
        res.status(500).send({message: e.message})
    }
}

module.exports = {
    addTarea
}