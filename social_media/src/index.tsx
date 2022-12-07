import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux'
import store from './Store/store';
import ChatProvider from './Context/ChatProvider';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider>
    <ChatProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChatProvider>
  </ChakraProvider>
);

