import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'


export const GifApp = () => {

    //const categories = ['One Punch','Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])
    /*const handleAdd = () => {
        setCategories([...categories, 'HunterXHunter']);
    }*/
    return (
        <div>
            <h2>GifApp</h2>
            <AddCategory></AddCategory>
            <hr />

            <ul>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ul>
        </div>
    )
}
