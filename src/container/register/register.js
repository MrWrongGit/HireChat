import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

import { userRegisterAction } from '../../redux/user_redux'

import { connect } from 'react-redux'

class Register extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			name:'',
			pswd:'',
			pswd_repeat:'',
			identity:'genuis'
		}

		this.handleRegister=this.handleRegister.bind(this)
	}

	handleChange(k,v){
		this.setState({
			[k]:v
		})
	}

	handleRegister(){
		//逻辑处理都放到redux，conponent/container只负责ui部分
		userRegisterAction({'name':this.state.name,'pswd':this.state.pswd,'identity':this.state.identity})
	}

	render(){
		let RadioItem = Radio.RadioItem

		return (
			<div>
				<h2>注册页</h2>
				<Logo />
				<WingBlank>
					<List>
						<InputItem onChange={(v)=>this.handleChange('name',v)}>用户名</InputItem>
						<InputItem type='password' onChange={(v)=>this.handleChange('pswd',v)}>密码</InputItem>
						<InputItem type='password' onChange={(v)=>this.handleChange('pswd_repeat',v)}>确认密码</InputItem>

						<RadioItem checked={this.state.identity==='genuis'}
							onClick={()=>this.handleChange('identity','genuis')}>牛人</RadioItem>
						<RadioItem checked={this.state.identity==='boss'}
							onClick={()=>this.handleChange('identity','boss')}>Boss</RadioItem>

						<Button type='primary' onClick={this.handleRegister}>注册</Button>
					</List>
				</WingBlank>
			</div>
		)
	}
}

export default Register /*= connect(
	"user":(state)=>state.user,
	{ userRegisterAction }
)(Register)*/