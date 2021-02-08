import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './global.styles';
import reducers from './reducers';
import 'antd/dist/antd.css';

const App: React.FC = () => (
  <>
    <Provider store={reducers}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </Provider>
  </>
);

export default App;
