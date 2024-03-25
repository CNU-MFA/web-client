import { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({
    userId: '',
    userPw: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(user);
  };

  return (
    <>
      <h1>충남대학교 포털</h1>
      <form>
        <label htmlFor="userId">학번 및 교직원 번호</label>
        <input type="text" id="userId" name="userId" onChange={handleChange} />
        <label htmlFor="userPw">비밀번호</label>
        <input type="password" id="userPw" name="userPw" onChange={handleChange} />
        <button type="button" onClick={handleSubmit}>
          로그인
        </button>
      </form>
    </>
  );
};

export default Login;
