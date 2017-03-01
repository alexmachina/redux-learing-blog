const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

class loginController {
  getToken(req, res) {
    let user = req.body
    if(!user.username || !user.password) {
      return res.status(400).send("User not found")
    }

    let findUser = userModel.findOne(user).exec()
    findUser.then(user => {
      if (user) {
        let token = jwt.sign(user, 'shh')
        res.json({token: token})
      } else {
        res.status(404).send("User not found")
      }
    })
  }
}

module.exports= new loginController()
