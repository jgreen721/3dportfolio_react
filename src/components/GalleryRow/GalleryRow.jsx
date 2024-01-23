import React, {useState, useRef,useEffect} from 'react'
import "./GalleryRow.css"
import {GalleryItem} from "../"

const GalleryRow = ({galleryItem}) => {
    const [isRunning,setIsRunning] = useState(false);
    const carouselRef = useRef();


    useEffect(()=>{
        if(carouselRef.current){
        carouselRef.current.style.animationPlayState = "paused";
        }

    },[])
  return (
    <div className="gallery-row-parent">
        <h3>Level:{galleryItem.level}</h3>
        <h4 className="gallery-item-description">{galleryItem.description}</h4>
        <button className="gallery-play-btn" onClick={()=>{
            if(isRunning){
            carouselRef.current.style.animationPlayState = "paused";
            }
            else{
                carouselRef.current.style.animationPlayState = "running";

             }
            setIsRunning(isRunning=>isRunning = !isRunning)
        }}>{isRunning ? "Pause" : "Play"}</button>
        <ul className="gallery">
            <div ref={carouselRef} className="gallery-content animate-gallery">
            {galleryItem.samples.map(item=>(
                <GalleryItem key={item.id} item={item}/>
            ))}
             {galleryItem.samples.map(item=>(
                <GalleryItem key={item.id} item={item}/>
            ))}
            </div>
        </ul>
    </div>
  )
}

export default GalleryRow