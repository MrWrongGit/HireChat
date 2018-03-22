const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/hire_chat')
mongoose.connection.on('connected', ()=>{ console.log('mongoDB connected') })

const models = {
	user:{
		'name'     : {type:String,require:true},
		'pswd'     : {type:String,require:true},
		'identity' : {type:String,require:true},
 
		'avatar'   : {type:String},
		'desc'     : {type:String},
		'title'    : {type:String},
		'company'  : {type:String},
		'money'    : {type:String}
	}
}

for(let m in models){
	mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports={
	getModel: function(name){
		return mongoose.model(name)
	}
}