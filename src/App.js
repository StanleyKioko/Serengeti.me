import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Animals from './components/Animals';
import Endangered from './components/Endangered';
import Recommended from './components/Recommended';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Animals />
      <Endangered />
      <Recommended />
      <Footer />
    
    </div>
  );
}

export default App;
