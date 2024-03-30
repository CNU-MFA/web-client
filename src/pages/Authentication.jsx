import { AUTHENTICATION } from '../constants/authentication';
import Card from '../components/common/Card';
import Description from '../components/common/Description';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION } from '../constants/navigation';
import styled from 'styled-components';
import { useState } from 'react';

const Authentication = () => {
  const navigate = useNavigate();
  const [authenticationStatus, setAuthenticationStatus] = useState(false);

  const handleRequest = () => {
    setAuthenticationStatus(true);
  };

  const handleSuccess = () => {
    console.log('done!');
  };

  return (
    <section>
      <Card size={440} title={AUTHENTICATION.TITLE}>
        <Description
          text={
            authenticationStatus
              ? AUTHENTICATION.SUCCESS_DESCRIPTION
              : AUTHENTICATION.REQUEST_DESCRIPTION
          }
        />
        <ButtonContainer>
          <Button
            type="button"
            variant="authentication"
            onClick={authenticationStatus ? handleSuccess : handleRequest}
            text={
              authenticationStatus
                ? AUTHENTICATION.SUCCESS
                : AUTHENTICATION.REQUEST
            }
          />
        </ButtonContainer>
      </Card>
    </section>
  );
};

export default Authentication;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
