import React from 'react';
import './App.css';
import SignInComponent from './components/SignInComponent';
import TopNavBar from './components/TopNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <SignInComponent />
    </div>
  );
}

export default App;
