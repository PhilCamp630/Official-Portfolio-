import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import AnimatedCamouflage from './components/home/AnimatedCamouflage';
import About from './components/about/About';

function App() {

  return (
    <>
      <Header/>
      <AnimatedCamouflage/>
      <main className="main">
        <Home />
        <About />
      </main>
    </>
  )
}

export default App
