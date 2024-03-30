import styled from 'styled-components';

const Button = ({ type, variant, onClick, text, ...props }) => {
  return (
    <Layout type={type} variant={variant} onClick={onClick} {...props}>
      {text}
    </Layout>
  );
};

export default Button;

const Layout = styled.button`
  box-sizing: border-box;
  width: ${({ variant }) => (variant === 'login' ? 110 : 80)}px;
  height: ${({ variant }) => (variant === 'login' ? 110 : 40)}px;
  background-color: transparent;
  font-size: ${({ variant }) => (variant === 'login' ? 18 : 15)}px;
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
