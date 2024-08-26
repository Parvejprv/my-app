import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
