import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

class Register extends React.Component{
	render(){
		let RadioItem = Radio.RadioItem

		return (
			<div>
				<h2>注册页</h2>
				<Logo />
				<WingBlank>
					<List>
						<InputItem>用户名</InputItem>
						<InputItem>密码</InputItem>
						<InputItem>确认密码</InputItem>

						<RadioItem>牛人</RadioItem>
						<RadioItem>Boss</RadioItem>
					</List>
				</WingBlank>
			</div>
		)
	}
}

export default Register