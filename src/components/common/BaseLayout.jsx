import styled from 'styled-components';
import backgroundImage from '../../assets/images/background.png';
import Logo from '../../assets/images/logo.png';

const BaseLayout = ({ children, ...props }) => {
  return (
    <Main {...props}>
      <section>
        <LogoContainer src={Logo} alt="충남대학교 로고" />
        {children}
      </section>
    </Main>
  );
};

export default BaseLayout;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const LogoContainer = styled.img`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 10%);
  max-width: 600px;
`;
