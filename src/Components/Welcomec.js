import React from "react";
class Welcomec extends React.Component{
    constructor (props){
        console.log("constructore phase");
        super(props);
        this.state = {
               first_name: "ahmed",
               last_name:"reda"
        }
    }
    // state = {
    //     first_name: "ahmed",
    //     last_name:"reda"
    // }
    Changename = ()=>{
        console.log(this) // undefind
        this.setState({
            last_name:"mahran"
        });
    }
    render(){
        console.log("render phase");
        console.log(this.state);
        return(
             <>
             <h1>hello, {this.props.name}</h1>
             <p>age: {this.props.age}</p>
             <p>title: {this.props.title}</p>
             <button onClick={this.Changename}
            //  {()=>{
            //          this.setState({
            //             last_name: "mahran"
            //         })
                    
            //  }}
             > change name</button>
             <h6>created by: {this.state.first_name} {this.state.last_name}</h6>
             </>
        );
    }
    componentDidMount(){
        // this.setState({
        //     last_name: "mahran"
        // })
        console.log("componentdidmpunt phase");
    }
}

export default Welcomec;