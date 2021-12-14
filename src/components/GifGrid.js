import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GridGifItem } from './GridGifItem';

export const GifGrid = ( {category}) => {

    const [imagenes, setImagenes] = useState([]);

    
    
    //use efect es para que el codigo se ejecute una unica vez
    useEffect(() => {
       getGifs(category)
       .then(setImagenes)
       ;
    },[category])

    

  


    return (
        <>        
            <h2> {category}</h2>
            <div className="card-grid">
                
                    {
                        imagenes.map( imagenes=>(
                            <GridGifItem 
                                id = {imagenes.id }
                                {...imagenes}/>
                        ))
                    
                    }
            
            </div>
        </>
    )
}
