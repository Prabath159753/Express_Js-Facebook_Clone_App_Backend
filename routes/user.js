const express = require('express')
const app = express()
const router = express.Router()

const User = require('../model/user.model')

app.use(express.json())


router.get('/',async (req, res) =>{
    try {
        const register = await User.find()
        res.json(register)
    }catch (error) {
        res.send('Error : '+error)
    }
})


module.exports = router