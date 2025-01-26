import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './App.css';
import Companies from './components/Companies/Companies';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/ScrollUp/ScrollUp';

function App() {
  return (
    <div className="App">
      <div>
        <div className="white__gradient" />
        <Header />
        <Hero />
      </div>
      <Residencies />
      <Value />
      <Contact />
      <Companies />
      <GetStarted />
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
