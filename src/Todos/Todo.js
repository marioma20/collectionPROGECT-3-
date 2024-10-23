
import { useRef, useState } from 'react';
import './Todo.css';
function Todo(){

    const [todos, settodos] = useState([]);
     const refinput = useRef();

    const handeltodo = ()=>{
        const text = refinput.current.value;
        // console.log(text);
        const newtodo = {text, completed:false};
        settodos([...todos, newtodo]);
        refinput.current.value = "";
    }

    const handeltododone = (index) =>{
        const newtodo = [...todos];
        newtodo[index].completed  = !newtodo[index].completed;
        settodos(newtodo);
    }
    // console.log(todos)

    const handeldelete = (index) =>{
        const newtodo = [...todos];
        newtodo.splice(1, index);
        settodos(newtodo);
    }

    return(
        <>
        <div className='container'>

        <h2>Todo List</h2>
        <div className='addto'>
        <input ref={refinput} placeholder='Enter item...'/>
        <button onClick={()=> handeltodo()}>ADD +</button>
        </div>
        <ul>
              {todos.map(({text, completed}, index)=>{
                return(
                    <> 
                    <div className='content'>
                    <li className={completed? "done" : null}  onClick={()=> handeltododone(index)} key={index}>{text}</li>
                    <span onClick={()=>handeldelete(index)}>❌</span>
                    </div>
              
                    </>
                );
              })}
        </ul>

        </div>
      
    
        </>
    );
}
export default Todo;