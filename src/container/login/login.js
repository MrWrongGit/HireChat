import React from 'react'
import Logo from '../../component/logo/logo'

import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

import { Redirect } from 'react-router-dom'

import axios from 'axios'

class Login extends React.Component{

	constructor(props){
		super(props)
		this.guidToRegister = this.guidToRegister.bind(this)
		this.login = this.login.bind(this)
	}

	guidToRegister(){
		this.props.history.push('/register')
	}

	login(){
		axios.get('/login',{name:'zhl',age:28}).then((res)=>{
			console.log(res)
		})
	}

	render(){
		return (
			<div>
				<h2>登陆页</h2>
				<Logo />
				
				<WingBlank>
					<List>
						<InputItem>用户</InputItem>
						<WhiteSpace />
						<InputItem>密码</InputItem>
					</List>
					<WhiteSpace />
					<Button type='primary' onClick={this.login}>登陆</Button>
					<WhiteSpace />
					<Button type='primary' onClick={this.guidToRegister}>注册</Button>
				</WingBlank>
			</div>
		)
	}
}

export default Login