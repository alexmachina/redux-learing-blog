const userModel = require('../models/userModel');

class UserController {
  getUsers(req, res) {

    let page = req.param('page');

    let findUsers = userModel.find({})
      .skip((page -1 )*10)
      .limit(10)
      . exec()
    findUsers.then(users => res.json(users))
    findUsers.catch(err => res.status(500).json(err))
  }

  getUser(req, res) {
    let findUser = userModel.findById(req.params.id).exec()

    findUser.then(user => res.json(user))
    findUser.catch(err => res.status(500).json(err))
  }  

  addUser(req, res) {
    let saveUser = new userModel(req.body).save()

    saveUser.then(() => res.send())
    saveUser.catch(err => res.status(500).json(err))
  }

  updateUser(req, res) {
    let updateUser = userModel.findByIdAndUpdate(
      req.params.id,
      {$set : req.body}
    )

    updateUser.then(() => res.send())
    updateUser.catch(err => res.status(500).json(err))
  }
}

module.exports = new UserController()
