import styled from 'styled-components';

const Button = ({ type, varient, onClick, text, ...props }) => {
  return (
    <Layout type={type} varient={varient} onClick={onClick} {...props}>
      {text}
    </Layout>
  );
};

export default Button;

const Layout = styled.button`
  box-sizing: border-box;
  width: ${({ varient }) => (varient === 'login' ? 110 : 70)}px;
  height: ${({ varient }) => (varient === 'login' ? 110 : 40)}px;
  background-color: transparent;
  font-size: ${({ varient }) => (varient === 'login' ? 18 : 15)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: 1px solid #000;

  &:hover {
    background-color: #1472ec;
    color: #fff;
    border: none;
  }
`;
