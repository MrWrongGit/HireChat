const express = require('express')
const bodyParserMid = require('body-parser')
const userRouterMid = require('./user')

const app = express();
//start server
app.listen(9000,()=>{ console.log("server running @ 9000") })
//static resource path config
app.use(express.static('static'))
app.use(bodyParserMid.json()) //user body-parser for json post
app.use('/user',userRouterMid)