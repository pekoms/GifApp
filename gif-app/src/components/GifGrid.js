import { useEffect } from "react"
import { useState } from "react"
import {React} from 'react'
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";


export default function GifGrid({category}) {

      const {data:images,loading} = useFetchGifs(category);
    
    return (
        <>
        <h3 className="animate__fadeInRightBig">{category}</h3>
        {loading && <p className="animate__flash">Loading</p>}
        <div className="card-grid animate__fadeInLeft">
            
            
            {
                images.map(img=>(
                    <GifGridItem key={img.id}{...img}></GifGridItem>
                ))
            }
        </div>
        </>
    )
}

GifGrid.propTypes={
    category: PropTypes.string.isRequired
}