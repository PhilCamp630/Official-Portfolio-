import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import AnimatedCamouflage from './components/home/AnimatedCamouflage';

function App() {

  return (
    <>
      <Header/>
      <AnimatedCamouflage/>
      <main className="main">
        <Home />
      </main>
    </>
  )
}

export default App
