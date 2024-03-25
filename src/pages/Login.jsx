import { useState } from "react"

const Login = () => {
	const [user, setUser] = useState({
		userId: "",
		userPw: ""
	})

	const handleChange = (e) => {
		const {userId, userPw} = e.target
		setUser({
			...user,
			[userId]: userId,
			[userPw]: userPw
		})
	}

	const handleSubmit = () => {
		console.log('request api')
	}

	return (
		<form>
			<label htmlFor="userId">학번 및 교직원 번호</label>
			<input type="text" id="userId" name="userId" onChange={handleChange}/>
			<label htmlFor="userPw">비밀번호</label>
			<input type="text" id="userPw" name="userPw" onChange={handleChange}/>
			<button type="submit" onClick={handleSubmit}>로그인</button>
		</form>
	)
}

export default Login