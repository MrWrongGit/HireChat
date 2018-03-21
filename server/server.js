const express = require('express')


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/user')
mongoose.connection.on('connected', ()=>{ console.log('mongoDB connected') })

const User=mongoose.model('user',new mongoose.Schema({
	name: {type: String, require:true},
	age: {type: Number, require:true},
}))


const app = express();
//start server
app.listen(9000,()=>{ console.log("server running @ 9000") })
//static resource path config
app.use(express.static('static'))

app.get('/user',(req, res)=>{
	res.json({
		name:'zhl',
		age:28
	})
})