import React, { useState } from "react";

// function Button_2(props){

//     const [name, set_name] = useState('');
//     const [password, set_password] = useState('');
//     const [gender, set_gender] = useState('');

//     const handelname = (value)=>{
//         set_name(value);
//         console.log('done')
//     }
//     const handlepassword = (value)=>{
//         set_password(value);
//         console.log('done')
//     }
//     const handlegender = (value)=>{
//         set_gender(value);
//         console.log('done')
//     }
//      console.log({name, password, gender});
//     return(
//         <>
        
//           <button onClick={(e)=>{
//             handelname(e.target.value);
//           }}>set_name</button>
//           <button onClick={(e)=>{
//             handlepassword(e.target.value);
//           }}>set_password
         
//           </button>
//           <button onClick={(e)=>{
//             handlegender(e.target.value);
//           }}>set_gender</button>
//         </>
//     );
// }
class Button_2 extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {
            name: '',
            password: '',
            gender: ''
        }
    }
    handle_name = (value)=>{

        this.setState({name: value});
        console.log('done')
    }
    handle_pass = (value)=>{
        this.setState({password: value});
        console.log('done')

    }
    handle_gender = (value)=>{
        this.setState({gender: value});
        console.log('done')

    }
    render(){
        return (

            <> 
            <button onClick={(e)=>{
                this.handle_name(e.target.value);
            }}>set_name</button>
            <button onClick={(e)=>{
                this.handle_pass(e.target.value);
            }}>set_password</button>
            <button onClick={(e)=>{
                this.handle_gender(e.target.value);
            }}>set_gender</button>

            </>
        );
    }
}

export default Button_2;