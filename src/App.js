import React, { useRef, useEffect } from 'react';
import './App.css';
import {TweenMax, Power3} from 'gsap';
import {Nav, Home} from './components'

function App() {
  let App = useRef(null)
  useEffect(() => {
    TweenMax.to(App, 1, {
      css: {visibility: 'visible'},
      ease: Power3.easeOut
    })
  }, [])
  return (
    <div ref={e=>App = e} className="App">
      <Nav></Nav>
      <Home></Home>
    </div>
  );
}

export default App;
