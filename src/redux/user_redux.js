import axios from 'axios'

const REGISTER="register"
const REGISTER_FAIL="register_fail"
const REGISTER_SUCCESS="register_success"

const initState = {
	"name":"",
	"pswd":"",
	"pswd_repeat":"",
	"identity":"genuis",

	"registerState":"",
	"loginState":false
}

const user=(state,action)=>{
	
}

export const loginAction=()=>{
	return (dispatch)=>{

	}
}

export const userRegisterAction=({name,pswd,identity})=>{
	//return (dispatch)=>{
		axios.post('/user/register',{name,pswd,identity})
		.then((res)=>{
			if(res.status===200){
				if(res.data.code===0){
					console.log('regist ok')
				}else{
					console.log('regist faile: '+res.data.msg)
				}
			}
			
		})
		.catch((err)=>{
			console.log(err)
		})
	//}
}
