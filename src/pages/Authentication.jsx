import styled from 'styled-components';
import { AUTHENTICATION } from '../constants/main';
import { authenticationConfig } from '../config/authenticationConfig';
import { useLocation } from 'react-router-dom';
import Card from '../components/common/Card';
import Description from '../components/common/Description';
import AuthenticationButton from '../components/AuthenticationButton';

const Authentication = () => {
  const location = useLocation();
  const user = location.state;

  return (
    <section>
      <Card size={440} title={AUTHENTICATION.TITLE}>
        <Description text={AUTHENTICATION.DESCRIPTION} />
        <ButtonContainer>
          {Object.entries(authenticationConfig).map(([key, value]) => (
            <AuthenticationButton
              key={key}
              type={value.type}
              navigation={value.navigation}
              text={value.text}
              user={user}
            />
          ))}
        </ButtonContainer>
      </Card>
    </section>
  );
};

export default Authentication;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  & button {
    margin-bottom: 10px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;
