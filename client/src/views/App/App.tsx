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

function App() {

  return (
    <div className="App">
      <Header></Header>

      <Router>
        <Routes>
          <Route path="/" element={
            <div>
                <Background></Background>
                <Main ></Main>
            </div>
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
