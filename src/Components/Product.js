
function Product(props){
    return(
        <>
        <div className="product">
             <h1>{props.title}</h1>
             <p>{props.description}</p>
             <span>{props.price}</span>
        </div>
        </>
    );
}

export default Product;