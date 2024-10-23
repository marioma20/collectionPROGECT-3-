
function Button(props){

    const btn_handler = ()=>{
        console.log('btn_handler');
    }
    const MOUSELEAVE = ()=>{
        console.log("on mouse leave");
    }
    const mouseenter = ()=>{
        console.log("on moouse enter");
    }
    return(

        <>
        
        <button className="react_btn" onClick={ btn_handler}>{props.title}</button>
        <button className="react_btn" onMouseEnter={ mouseenter}>{props.title}</button>
        <button className="react_btn" onMouseLeave={ MOUSELEAVE}>{props.title}</button>


        </>
    );

}
export default Button;