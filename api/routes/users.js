var express = require('express');
var router = express.Router();
let UserController = require('../controllers/userController.js');

/* GET users listing. */
router.get('/users', UserController.getUsers)
router.get('/user/:id', UserController.getUser)
router.post('/user', UserController.addUser)
router.put('/user/:id', UserController.updateUser)

module.exports = router;
