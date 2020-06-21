import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import TopNavBar from './components/TopNavBar';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <SignIn />
    </div>
  );
}

export default App;
