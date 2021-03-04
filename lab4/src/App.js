import React from 'react';
import Market from './components/Market'
import PageTitle from './components/PageTitle'
import './App.css';

function App() {
  //set title of market page
  const title = "Welcome to the Market!"
  return (
    <div>
    <PageTitle title={title} />
    <Market/>
    </div>
  );
}

export default App;