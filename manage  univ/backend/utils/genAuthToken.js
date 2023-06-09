const jwt = require('jsonwebtoken')

//func genere token for login and register
const genAuthToken = (user) => {
  const secretKey = process.env.JWT_SECRET_KEY;

  const token = jwt.sign({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role


  }, secretKey)
  return token
}

module.exports = genAuthToken