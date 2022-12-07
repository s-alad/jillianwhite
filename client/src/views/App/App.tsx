import React, { Fragment, useEffect } from 'react';
import './App.css';
import '../../shared/common/common.css'
import 'animate.css';

import Header from '../../components/header/header';
import Main from '../main/main';
import Background from '../background/background';
import Speaking from '../../paths/Engagements/engagements';



import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Media from '../../paths/Media/Media';
import Business from '../../paths/Business/Business';
import About from '../about/about';
import Medium from '../../paths/Medium/Medium';

function App() {
  

  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={
            <div>
                {/* <Background></Background> */}
                <Main ></Main>
            </div>
          }/>
          <Route path="/about" element={
            <About></About>
          }/>
          <Route path='speaking' element={
            <Speaking></Speaking>
          }/>
          <Route path='media' element={
            <Media></Media>
          }/>
          <Route path='appraisal' element={
            <Business></Business>
          }/>
          <Route path='medium' element={
            <Medium></Medium>
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
