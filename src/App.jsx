import Router from './router/Router';
import GlobalStyle from './assets/styles/GlobalStyle';
import BaseLayout from './components/common/BaseLayout';

function App() {
  return (
    <BaseLayout>
      <GlobalStyle />
      <Router />
    </BaseLayout>
  );
}

export default App;
