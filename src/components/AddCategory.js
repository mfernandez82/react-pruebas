import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ( {setCategories}) => {

    const [inputvalue, setInputValue] = useState('');

    const handleInputValue = (e) => {
        setInputValue( e.target.value);                 
    }

    const handleSubmit = (e)  =>{
        //prevenir la recarna del navegador
        e.preventDefault();
        
        if(inputvalue.trim().length>2){
            setCategories(cats => [inputvalue,...cats]);
            setInputValue('');
        }
        
        
    }

    return (
        
        <form onSubmit = {handleSubmit}>
            <input
                type="text"
                placeholder='Ingresa un valor aqui'
                
                value ={inputvalue}
                onChange = {handleInputValue}

            />
        </form>
        
    )
}


AddCategory.prototype = {
    setCategories : PropTypes.func.isRequired
        
    
}