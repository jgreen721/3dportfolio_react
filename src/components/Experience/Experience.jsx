import React, {useEffect,useRef, useState} from 'react'
import {useFrame} from "@react-three/fiber"
import {useGLTF, Float,Box,useAnimations} from "@react-three/drei"



const Model = ()=>{
    const img = useGLTF("./models/typingguy2.glb")
    const modelRef = useRef();
    const [pos,setPos] = useState([0,-2.5,-1]);
    const [scale,setScale] = useState(.6)
    const {actions,mixer} = useAnimations(img.animations,img.scene)
    const [showIntro,setShowIntro] = useState(true)

    console.log(img)




    useEffect(()=>{
      if(innerWidth < 950){
        //
        setScale(1)
        setPos([.5,-2.5,-2])
        console.log('mobile size...')
      }

      // setTimeout(()=>{
      //   console.log('stop intro!')

      //   setShowIntro(showIntro=>showIntro = false)
      //   mixer.stopAllAction();
      // },5500);
      
    },[])

  console.log(img.animations)

    useFrame(()=>{
      img.animations.forEach(animation=>{
      //   if(showIntro){
      //   if(animation.name == "ChairAction"){
      //    let action = mixer.clipAction(animation)
      //    action.play();
      //     // console.log("typing...")
      //   }
      // }
      // else{
        if(animation.name == "Typing"){
          let action = mixer.clipAction(animation)
          action.play();
         }
        //   if(showIntro){
        //    if(animation.name == "LowerCurtain"){
        //     let action = mixer.clipAction(animation)
        //     action.play();
        //    }
        //  }
      //  }
       })
    })


    return (
      <group onClick={()=>{

      }}>
         {/* <directionalLight position={[0,0,1]} intensity={2}/> */}
        {/* <pointLight intensity={3} position={[0,1,-1]} />  */}
        <Float>
        <primitive scale={scale} position={pos} rotation={[0,Math.PI * -.3,0]} object={img.scene}/>
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