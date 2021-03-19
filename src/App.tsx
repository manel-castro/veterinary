import React from 'react';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
