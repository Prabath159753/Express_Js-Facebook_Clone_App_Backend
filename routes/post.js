const express = require('express')
const app = express()
const router = express.Router()

const Posts = require('../model/post.model')

app.use(express.json())






module.exports = router