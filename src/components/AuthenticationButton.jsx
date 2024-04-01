import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const AuthenticationButton = ({ type, text, navigation, user, ...props }) => {
  const navigate = useNavigate();

  const navigateToAuthentication = () => {
    navigate(navigation, { state: { ...user } });
  };

  return (
    <Layout type={type} {...props} onClick={navigateToAuthentication}>
      {text}
    </Layout>
  );
};

export default AuthenticationButton;

const Layout = styled.button`
  box-sizing: border-box;
  border: 1px solid #000;
  outline: none;
  cursor: pointer;
  width: 150px;
  height: 30px;
  background-color: transparent;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: #1472ec;
    color: #fff;
    border: none;
  }
`;
