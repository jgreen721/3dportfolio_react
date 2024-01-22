import React from 'react'
import {Canvas} from "@react-three/fiber"
import "./Scene.css"
import {Experience} from ".."
import { Environment } from '@react-three/drei'

const Scene = () => {
  return (
    <div className="scene-container">
        <Canvas>
          <color attach="background" args={["black"]}/>
          <ambientLight intensity={.8}/>
          <Environment preset="city" background={true}/>
            <Experience/>
        </Canvas>
    </div>
  )
}

export default Scene