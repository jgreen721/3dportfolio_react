import React from 'react'
import "./GalleryItem.css";


const GalleryItem = ({item}) => {
  return (
    <li className="gallery-item">
        <div className="gallery-img-container">
            <img className="gallery-img" src={item.img} alt="" />
        </div>
        <h4>{item.title}</h4>
        <a href={item.site} target="_blank">Visit</a>
    </li>
  )
}

export default GalleryItem