const postModel = require('../models/postModel.js')

class PostController {
  getPosts(req, res) {
  
    let page = req.param('page')
    debugger;
    let findPosts = postModel.find({})
      .sort('-date')
      .limit(5)
      .skip((page-1) * 5)

      .populate('category')
      .exec()

    
    let findCount = postModel.count({})
    let promArr = [findPosts, findCount]

    Promise.all([findPosts, findCount]).then(results => {
      res.json({
        posts: results[0],
        count: results[1]
      })
    }).catch(err => {
      console.log(err)
      //res.status(500).send(err)
    })

  }

  getPost(req, res) {
    let find = postModel.findById(req.params.id).populate('category').exec()
    
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
