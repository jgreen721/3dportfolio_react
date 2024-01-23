import React, {useEffect,useRef, useState} from 'react'
import {useFrame} from "@react-three/fiber"
import {useGLTF, Float,Box,useAnimations} from "@react-three/drei"



const Model = ()=>{
    const img = useGLTF("./models/newscene.glb")
    const modelRef = useRef();
    const pos = [0,-2.5,-1];
    const {actions,mixer} = useAnimations(img.animations,img.scene)
    const [showIntro,setShowIntro] = useState(true)

    console.log(img)




    useEffect(()=>{
      if(innerWidth < 950){
        //
        console.log('mobile size...')
      }

      setTimeout(()=>{
        console.log('stop intro!')

        setShowIntro(showIntro=>showIntro = false)
        mixer.stopAllAction();
      },5500);
      
    },[])

  console.log(img.animations)

    useFrame(()=>{
      img.animations.forEach(animation=>{
        if(showIntro){
        if(animation.name != "Typing"){
         let action = mixer.clipAction(animation)
         action.play();
        //  console.log("typing...")
        }
      }
      else{
        if(animation.name == "Typing"){
          let action = mixer.clipAction(animation)
          action.play();
         //  console.log("typing...")
         }
      }
      })
    })


    return (
      <group>
        {/* <directionalLight position={[0,0,1]} intensity={2}/>
        <pointLight intensity={3} position={[0,1,-1]} /> */}
        <Float>
        <primitive scale={.6} position={[0,-2.5,-1]} rotation={[0,Math.PI * -.1,0]} object={img.scene}/>
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