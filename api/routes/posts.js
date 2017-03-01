let express = require('express');
let router = express.Router();
let postController = require('../controllers/postController')
let tokenMiddleware = require('../middlewares/tokenMiddleware')

router.get('/posts', tokenMiddleware, postController.getPosts)
router.get('/post/:id', postController.getPost)
router.post('/post', postController.addPost)
router.put('/post/:id', postController.updatePost)

module.exports = router
