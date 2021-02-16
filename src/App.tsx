import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import Routes from './routes';
import reducers from './reducers';
import './styles.css';
import theme from './ColorMode';

const App: React.FC = () => (
  <>
    <ChakraProvider theme={theme}>
      <Provider store={reducers}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </>
);

export default App;
