import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')
    const handleInputChange=(e)=>{
        setInputValue(e.target.value);

        //console.log('HandleInputChange Llamado')
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        //console.log("Submit hecho")
        if(inputValue.trim().length>2){
            setCategories(cats=>[inputValue,...cats,]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <p>{inputValue}</p>
           <input type="text" value={inputValue} onChange={handleInputChange}></input>
        </div>
        </form>
    )

 
}

AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}