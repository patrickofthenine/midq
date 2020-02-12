import React from 'react';
import Scene from './components/Scene';
import * as THREE from 'three'
import {Canvas} from 'react-three-fiber';

function App() {
  let height = window.innerHeight + 'px'
  return (
        <Canvas style={ {height: height}}>
          <ambientLight/>
          <Scene/>
        </Canvas>
  );
}

export default App;
