import styled from 'styled-components';

const LoginButton = ({ type, onClick, text, ...props }) => {
  return (
    <Layout type={type} onClick={onClick} {...props}>
      {text}
    </Layout>
  );
};

export default LoginButton;

const Layout = styled.button`
  box-sizing: border-box;
  width: 110px;
  height: 110px;
  background-color: transparent;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: 1px solid #000;

  &:hover {
    background-color: #1472ec;
    color: #fff;
  }
`;
