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

// get post in post id
router.get('/:id',async (req, res) =>{
    try {
        const post = await Posts.findById(req.params.id)
        res.json(post)
    }catch (error) {
        res.send('Error : '+ error)
    }
})

// get post in post publish user id
router.get('/:userId',async (req, res) =>{
    try {
        const posts = await Posts.find({ userId: req.params.userId })

        res.json(posts)
    }catch (error) {
        res.send('Error : '+ error)
    }
})

// save post
router.post('/',async (req,res) => {
    const posts = new Posts({
        userId:req.body.userId,
        date:req.body.date,
        time:req.body.time,
        title:req.body.title,
        body:req.body.body
    })

    try {
        const post = await posts.save()
        res.json(post)
    }catch (error) {
        res.send('Error : '+ error)
    }

})

module.exports = router