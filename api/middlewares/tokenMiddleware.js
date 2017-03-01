let jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
  let token = req.headers['authorization']
  if(token) {
    jwt.verify(token, 'shh', (err, decoded) => {
      if(err)
        res.status(500).send('Invalid token')
      else
        next()
    })
  } else {
    res.status(403).send('No token')
  }

}
