import { useState } from 'react';

const AddDevice = () => {
  const [otp, setOtp] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOtp({
      ...otp,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(otp);
  };

  return (
    <>
      <h1>기기 등록</h1>
      <div>Google Play QR코드</div>
      <div>App Store QR코드</div>
      <p>어플을 설치 후 로그인을 통해 받은 OTP코드를 입력해주세요.</p>
      <form>
        <input type="text" placeholder="OTP 코드" name="otp" onChange={handleChange} />
        <button type="button" onClick={handleSubmit}>
          확인
        </button>
      </form>
    </>
  );
};

export default AddDevice;
