import React from 'react'
import {Canvas} from "@react-three/fiber"
import "./Scene.css"
import {Experience} from ".."
import { Environment, OrbitControls } from '@react-three/drei'

const Scene = () => {
  return (
    <div className="scene-container">
        <Canvas>
          <color attach="background" args={["black"]}/>
          {/* <ambientLight intensity={.8}/> */}
          <OrbitControls         
          minAzimuthAngle={-Math.PI / 2} // Minimum azimuthal angle (left)
        maxAzimuthAngle={Math.PI / 2}/>
          <Environment preset="city" background={false}/>
            <Experience/>
        </Canvas>
    </div>
  )
}

export default Scene