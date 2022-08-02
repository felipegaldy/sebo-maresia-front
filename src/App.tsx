import React from 'react';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Carrosel from './components/carrosel/Carrosel';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Carrosel />
      <Home />
    </>
  );
}

export default App;
