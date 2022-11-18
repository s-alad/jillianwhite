import React, { useEffect } from 'react';
import './App.css';
import '../../shared/common/common.css'
import 'animate.css';

import Header from '../../components/header/header';
import Gobutton from '../../components/gobutton/gobutton';
import Main from '../main/main';
import Work from '../media/media';
import Background from '../background/background';

function App() {

  return (
    <div className="App">
      <Header></Header>

      <Background></Background>

      <Main ></Main>
    </div>
  );
}

export default App;
