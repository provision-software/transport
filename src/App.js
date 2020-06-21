import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import TopNavBar from './components/TopNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <SignIn />
    </div>
  );
}

export default App;
