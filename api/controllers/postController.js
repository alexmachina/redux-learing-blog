const postModel = require('../models/postModel.js')

class PostController {
  getPosts(req, res) {
    let page = req.param('page')

    let find = postModel.find({})
      .limit(10)
      .skip((page-1) * 10)
      .exec()

    find.then(posts => res.json(posts))
    find.catch(err => res.status(500).json(err))
  }

  getPost(req, res) {
    let find = postModel.findById(req.params.id).exec()
    find.then(post => res.json(post))
    find.catch(err => res.status(500).json(err))
  }

  addPost(req, res) {
    let save = new postModel(req.body).save()

    save.then(() => res.send())
    save.catch(err =>{ 
      console.log(err)
      res.status(500).json(err)
    })
  }

  updatePost(req, res) {
    let update = postModel.findByIdAndUpdate(req.params.id,
      {$set: req.body})
    update.then(() => res.send())
    update.catch(err => res.status(500).json(err))
  }
}

module.exports = new PostController()
