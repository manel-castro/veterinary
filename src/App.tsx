import React from 'react';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Test from './components/Test/Test';

import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
    </>
  );
}

export default App;
