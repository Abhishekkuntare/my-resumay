import connectDb from '../../middleware/mongoose'
import jsonwebtoken from 'jsonwebtoken'

const handler = async (req, res) => {
  if (req.method == 'POST') {
    let token = req.body.token
    let user = jsonwebtoken.verify(token, 'secret123')
    console.log(user)
    // let user = await User.find({ email: req.body.email })
    res.status(200).json({ user: user })
  } else {
    res.status(400).json({ error: 'error' })
  }
}

export default connectDb(handler)
