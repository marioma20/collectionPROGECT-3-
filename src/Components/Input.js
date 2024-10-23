import { useState } from "react";


function Input(props){
    const [value , set_value] = useState()
    return(
        <>
        <span>{value}</span>
        <label>{props.name}</label>
        <input type={props.type} onChange={(event)=>{
               // console.log(event.target.value);
               set_value(event.target.value)
        }}/> 
        
        </>
        );
}

export default Input;