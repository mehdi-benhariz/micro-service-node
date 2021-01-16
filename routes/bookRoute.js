const router = require('express').Router();

const {getAll,getOne,create,remove,update} = require('../controllers/bookController')

router.get('/all', getAll)
router.get('/one',getOne)
router.post('/',create)
router.delete('/',remove)
router.put('/',update)

module.exports= router;