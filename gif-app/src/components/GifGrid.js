import { useEffect } from "react"
import { useState } from "react"
import {React} from 'react'
import { GifGridItem } from "./GifGridItem";


export default function GifGrid({category}) {

    const [images, setImages] = useState([]);
    useEffect(()=>{
        getGifs();
    },[])
    const getGifs=async()=>{
        const url='https://api.giphy.com/v1/gifs/search?api_key=9lbnHKEK4dZRgKDJWDfxLIGqbFDwVSOa&q=saitama&limit=10';
        const resp= await fetch(url);
        const {data}= await resp.json();

        const gifs = data.map(img=>{
            return{
                id:img.id,
                title:img.title,
                url:img.images?.downsized_medium.url
            }
        })

        console.log(data);
        setImages(gifs);
    }
   
    return (
        <div>
            <h3>{category}</h3>
            {
                images.map(img=>(
                    <GifGridItem key={img.id}{...img}></GifGridItem>
                ))
            }
        </div>
    )
}
