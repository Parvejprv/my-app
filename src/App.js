import React from 'react';

import './App.css';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Content from './Content';

function App() {
  return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
  );
}

export default App;
