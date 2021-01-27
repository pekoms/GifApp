import { useEffect } from "react"
import { useState } from "react"
import {React} from 'react'
import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";


export default function GifGrid({category}) {

    const [images, setImages] = useState([]);
    useEffect(()=>{
        getGifs(category).then(setImages);
    },[category])
  

        
       //setImages(gifs);
    
   
    return (
        <>
        <div className="card-grid">
            <h3>{category}</h3>
            {
                images.map(img=>(
                    <GifGridItem key={img.id}{...img}></GifGridItem>
                ))
            }
        </div>
        </>
    )
}
