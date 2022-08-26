const express = require('express')
const app = express()
const router = express.Router()

const Posts = require('../model/post.model')

app.use(express.json())

// get all post
router.get('/',async (req, res) =>{
    try {
        const posts = await Posts.find()
        res.json(posts)
    }catch (error) {
        res.send('Error : '+ error)
    }
})






module.exports = router