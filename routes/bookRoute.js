const router = require('express').Router();

const {getAll,getOne,create} = require('../controllers/bookController')

router.get('/all', getAll)
router.get('/one',getOne)
router.post('/',create)

module.exports= router;