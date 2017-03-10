let express = require('express')
let router = express.Router()
let categoryController = require('../controllers/categoryController')

router.get('/categories', categoryController.getCategories)
router.get('/category/:id', categoryController.getCategory)
router.post('/category', categoryController.addCategory)
router.put('/category/:id', categoryController.updateCategory)

module.exports = router
