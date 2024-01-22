import React from 'react'
import { faqCard,nftCard,perfumeAd,resultsCard, } from '../../const'
import {GalleryRow} from ".."
import "./MyWork.css"


//links 
/*
https://jgreen721.github.io/frontend_challenges/nftfigma/
https://jgreen721.github.io/frontend_challenges/ratingcard_figmaanimate_fec/
https://frontend3dsolution.vercel.app/
https://perfume3d.vercel.app/
https://jgreen721.github.io/frontend_challenges/results_summary/
*/

const MyWork = () => {
  const data = [
    {
      id:1,
      level:"Newbie",
      description:"Getting your feet wet with HTML, CSS and a bit of Javascript in building small single components.",
      samples:[
        {id:1,title:"FAQ-Card",img:faqCard,site:"https://frontend3dsolution.vercel.app/"},
        {id:2,title:"NFT-Card",img:nftCard,site:"https://jgreen721.github.io/frontend_challenges/nftfigma/"},
        {id:3,title:"Perfume Ad",img:perfumeAd,site:"https://perfume3d.vercel.app/"},
        {id:4,title:"Survey Card",img:resultsCard,site:"https://jgreen721.github.io/frontend_challenges/results_summary/"},
      ]
    },
    {
      id:2,
      level:"Beginner",
      description:"Building out small sites and applying responsive positioning to page elements.",
      samples:[
        {id:1,title:"FAQ-Card",img:faqCard,site:"https://frontend3dsolution.vercel.app/"},
        {id:2,title:"NFT-Card",img:nftCard,site:"https://jgreen721.github.io/frontend_challenges/nftfigma/"},
        {id:3,title:"Perfume Ad",img:perfumeAd,site:"https://perfume3d.vercel.app/"},
        {id:4,title:"Survey Card",img:resultsCard,site:"https://jgreen721.github.io/frontend_challenges/results_summary/"},
      ]
    },
    {
      id:3,
      level:"Junior",
      description:"Continuing on with more advanced designs and deeper functionality",
      samples:[
        {id:1,title:"FAQ-Card",img:faqCard,site:"https://frontend3dsolution.vercel.app/"},
        {id:2,title:"NFT-Card",img:nftCard,site:"https://jgreen721.github.io/frontend_challenges/nftfigma/"},
        {id:3,title:"Perfume Ad",img:perfumeAd,site:"https://perfume3d.vercel.app/"},
        {id:4,title:"Survey Card",img:resultsCard,site:"https://jgreen721.github.io/frontend_challenges/results_summary/"},
      ]
    },
    {
      id:4,
      level:"Senior",
      description:"Fully functional sites ready for a backend server and to go into production.",
      samples:[
        {id:1,title:"FAQ-Card",img:faqCard,site:"https://frontend3dsolution.vercel.app/"},
        {id:2,title:"NFT-Card",img:nftCard,site:"https://jgreen721.github.io/frontend_challenges/nftfigma/"},
        {id:3,title:"Perfume Ad",img:perfumeAd,site:"https://perfume3d.vercel.app/"},
        {id:4,title:"Survey Card",img:resultsCard,site:"https://jgreen721.github.io/frontend_challenges/results_summary/"},
      ]
    },
  ]
  return (
    <div className="my-work-column">
      <h1 className="my-work-header">Work</h1>
      <div className="my-work-gallery-parent-container">
        {data.map(gallery=>(
          <GalleryRow key={gallery.id} galleryItem={gallery}/>
        ))}
      </div>
    </div>
  )
}

export default MyWork