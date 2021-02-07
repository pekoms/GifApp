import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import GifGrid from './components/GifGrid'


export const GifApp = ({defaultCategory=[]}) => {

    //const categories = ['One Punch','Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(defaultCategory)
    /*const handleAdd = () => {
        setCategories([...categories, 'HunterXHunter']);
    }*/
    return (
        <div>
            <h2>GifApp</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr />

            <ul>
                {
                    categories.map(category => 
                        <GifGrid 
                            key={category}
                            category={category}></GifGrid>
                    )
                }
            </ul>
        </div>
    )
}
