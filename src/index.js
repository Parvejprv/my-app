import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header';
import Content from './Content';
import Sidebar from './Sidebar';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
    {/* <Sidebar/> */}
    <Content/>
    <About />
    <Footer/>
    
  </>
);

reportWebVitals();
