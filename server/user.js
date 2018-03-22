const express=require('express')
const Router=express.Router()

const model=require('./model')
const userModel = model.getModel('user')

const utils=require('utility')

const jsonServerErr={
	code:1,
	msg:'服务器错误'
}
const jsonExistErr={
	code:1,
	msg:'该用户名已被注册'
}

Router.post('/register',(req,res)=>{
	userModel.findOne({name:req.body.name},(err,doc)=>{
		if(err){
			res.json(jsonServerErr)
		}else if(!doc){
			userModel.create({...req.body,pswd:utils.md5(utils.md5(req.body.pswd+'hello world'))},(err,doc)=>{
				if(err){
					res.json(jsonServerErr)
				}else{
					res.json({code:0})
				}
			})
		}else{
			res.json(jsonExistErr)
		}
	})
})

Router.get('/list',(req,res)=>{
	userModel.find({},(err,doc)=>{
		res.json(doc)
	})
})

module.exports=Router