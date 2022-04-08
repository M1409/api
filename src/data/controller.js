const pool = require('../../db')
const queries = require("./queries")

const getData = (req,res) =>{
    pool.query(queries.getData1 , (error,results) =>{
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const getDatabyId = (req,res) =>{
    const id = parseInt(req.params.id)
    pool.query(queries.getData1byid, [id], (error,results) =>{
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const addData = (req,res) =>{
    const {id,nome,idade,media,data_mat} = req.body

    pool.query(queries.checkId,[id],(error,results) =>{

        if (results.rows.length){
            res.send('This id already exists')
        }
    })

    pool.query(queries.addData,[id,nome,idade,media,data_mat],(error,results) =>{

        if (error) throw error

        res.status(201).send('Adicionado')
    })
}

const deleteData = (req,res) =>{
    const id = parseInt(req.params.id)

    pool.query(queries.getData1byid, [id], (error,results) =>{
        const noFound = !results.rows.length
        if (noFound){
            res.send('Não achou esse id')
        }

        pool.query(queries.deleteData, [id], (error,results) =>{
            if (error) throw error
            res.status(200).send('Deletou')
        })
    })
}

const uptadeData = (req,res) =>{
    const id = parseInt(req.params.id)
    const { nome } = req.body

    pool.query(queries.getData1byid, [id], (error,results) =>{

        const noFound = !results.rows.length
        if (noFound){
            res.send('Não achou esse id')
        }

        pool.query(queries.updateData, [nome,id],(error,results) =>{
            if (error) throw error
            res.status(200).send('Upgradado')
        })

    })

}

module.exports = {
    getData,
    getDatabyId,
    addData,
    deleteData,
    uptadeData
}