const tabela = 'aluno'
const param = 'id'
const param2 = 'nome'

const getData1 = `SELECT * FROM ${tabela} `
const getData1byid = `SELECT * FROM ${tabela} where ${param} = $1`
const checkId = `SELECT s from ${tabela} s where s.${param} = $1`
const addData = `INSERT INTO ${tabela} (id,nome,idade,media,data_mat) values ($1,$2,$3,$4,$5)`
const deleteData = `DELETE FROM ${tabela} where ${param} = $1`
const updateData = `UPDATE ${tabela} set ${param2} = $1 where id = $2`

module.exports = {
    getData1,
    getData1byid,
    checkId,
    addData,
    deleteData,
    updateData
}