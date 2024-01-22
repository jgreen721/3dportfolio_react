import React, {useEffect,useRef} from 'react'
import {useFrame} from "@react-three/fiber"
import {useGLTF, Float,Box,useAnimations} from "@react-three/drei"



const Model = ()=>{
    const img = useGLTF("./models/wtf.glb")
    const modelRef = useRef();
    const pos = [0,-2.5,-1];
    const {actions,mixer} = useAnimations(img.animations,img.scene)


    console.log(img)


    useEffect(()=>{
      if(innerWidth < 950){
        //
        console.log('mobile size...')
      }
    },[])

  

    useFrame(()=>{
      img.animations.forEach(animation=>{
         mixer.update(animation)
         let action = actions[animation.name];
        //  action.play();
      })
    })


    return (
      <group>
        <directionalLight position={[0,0,1]} intensity={2}/>
        <pointLight intensity={3} position={[0,1,-1]} />
        <Float>
        <primitive scale={1} position={[0,-2.5,-1]} rotation={[0,Math.PI * -.1,0]} object={img.scene}/>
        </Float>
      </group>
    )
    
}

const Experience = () => {
  return (
    <group>
      {/* <Box>
        <meshBasicMaterial color="red"/>
        </Box> */}
        <Model/>
    </group>
  )
}

export default Experience