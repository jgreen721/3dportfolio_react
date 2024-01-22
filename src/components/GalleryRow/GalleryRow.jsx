import React, {useState, useRef} from 'react'
import "./GalleryRow.css"
import {GalleryItem} from "../"

const GalleryRow = ({galleryItem}) => {
    const [isRunning,setIsRunning] = useState(true);
    const carouselRef = useRef();
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
        <ul ref={carouselRef} className="gallery animate-gallery">
            {galleryItem.samples.map(item=>(
                <GalleryItem key={item.id} item={item}/>
            ))}
             {isRunning && galleryItem.samples.map(item=>(
                <GalleryItem key={item.id} item={item}/>
            ))}
        </ul>
    </div>
  )
}

export default GalleryRow