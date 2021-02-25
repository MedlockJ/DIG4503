import React from 'react';
import HomePage from './components/homepage';

function App() {
  const fname = 'Jacob'
  return (
    <HomePage firstName={fname} />
  );
}

export default App;
