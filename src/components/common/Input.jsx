import styled from 'styled-components';

const Input = ({ type, placeholder, name, onChange, ...props }) => {
  return (
    <Layout
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;

const Layout = styled.input`
  box-sizing: border-box;
  padding: 16px 10px;
  outline: none;
  width: 150px;
  font-size: 16px;
  border: 1px solid #333;
`;
