import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Nav from './Nav/Nav';
import About from './About/About';

import css from './app.module.css';

const App = () => {
  return (
    <Router>
      <div className={css.gradientbackground}>
        <h1 className={css.h1}>Portfolio Jakub Piksa </h1>
        <h2 className={css.h2}>WORK IN PROGRESS</h2>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
