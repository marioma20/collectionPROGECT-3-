import React, { useState } from "react";

// function Form(){

// const [name, set_name] = useState('');
// const [password, set_password] = useState('');
// const [gender, set_gender] = useState('');
// const Name_handler = (value)=>{
//     set_name(value)
// }
// const pass_handler = (value)=>{
//     set_password(value)
// }
// const gabder_handler = (value)=>{
//     set_gender(value)
// }
// {
    // return(
    //     <>
    //     <form onSubmit={(e)=>{
    //         e.preventDefault();
    //         console.log({
    //             name,
    //             password,
    //             gender
    //         })
    //     }}>
    //         <label>name</label>
    //         <input type="text" placeholder="your name" onChange={(event)=>{
    //             Name_handler(event.target.value);
    //         }}/>
    //         <br/>
    //         <label>password</label>
    //         <input type="password" placeholder="your password" onChange={(event)=>{
    //             pass_handler(event.target.value);
    //         }}/>
    //         <br/>
    //         <select onChange={(event)=>{
    //             gabder_handler(event.target.value);
    //         }}>
    //             <option>male</option>
    //             <option>female</option>
    //         </select>
    //        <button type="submit">submit</button>
    //     </form>
    //     </>
    // );
// }
// }

// export default Form;

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            password: '',
            gender:''
        }
    }

 Name_handler = (value)=>{
    this.setState({name: value})
}
 pass_handler = (value)=>{
     this.setState({password:value})
}
 gabder_handler = (value)=>{
    this.setState({gender: value})
}
    render(){
      
             return(
        <>
        <form onSubmit={(e)=>{
            e.preventDefault();
            console.log(this.state)
        }}>
            <label>name</label>
            <input type="text" placeholder="your name" onChange={(event)=>{
               this.Name_handler(event.target.value);
            }}/>
            <br/>
            <label>password</label>
            <input type="password" placeholder="your password" onChange={(event)=>{
                this.pass_handler(event.target.value);
            }}/>
            <br/>
            <select onChange={(event)=>{
                this.gabder_handler(event.target.value);
            }}>
                <option>male</option>
                <option>female</option>
            </select>
           <button type="submit">submit</button>
        </form>
        </>
    );
     
    }
}



export default Form;

























