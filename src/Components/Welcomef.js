import { useState } from "react";

function Welcomef(props){
   // console.log(props);
  let [counter, set_counter] = useState(0);
  let [name, set_name] = useState("amer");
   return(
    <>
   <h1>hello, {props.name}</h1>
   <p>age: {props.age}</p>
   <p>title: {props.title}</p>
   <h6>{counter}</h6>
   <h6>{name}</h6>
    <button onClick={()=>{
       // set_counter(counter++)
       set_name("omer")
    }}>

   + </button>
   </>
   );
} 

export default Welcomef;