import React from 'react'
import "./GalleryItem.css";


const GalleryItem = ({item}) => {
  return (
    <li className="gallery-item">
        <div className="gallery-img-container">
            <img className="gallery-img" src={item.img} alt="" />
        </div>
        <div className="gallery-item-content">
        <h4>{item.title}</h4>
        <a href={item.site} target="_blank">Visit</a>
        </div>
    </li>
  )
}

export default GalleryItem