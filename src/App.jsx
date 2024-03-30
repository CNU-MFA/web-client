import Router from './router/Router';
import GlobalStyle from './assets/styles/GlobalStyle';
import styled from 'styled-components';
import backgroundImage from './assets/images/background.png';

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Router />
      </Main>
    </>
  );
}

export default App;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat; /* 배경 이미지 반복 없음 */
  background-position: center; /* 배경 이미지 중앙 정렬 */
`;
