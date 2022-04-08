const {Router} = require('express')
const controller = require('./controller')

const router = Router()

router.get('/',controller.getData)
router.get('/:id',controller.getDatabyId)
router.post('/post',controller.addData)
router.put('/update/:id',controller.uptadeData)
router.delete('/delete/:id',controller.deleteData)


module.exports = router



