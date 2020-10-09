import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStayle from './styles/globol';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStayle />
  </>
);

export default App;
