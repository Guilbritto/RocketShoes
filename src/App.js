import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/reactotronConfig';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Route from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
