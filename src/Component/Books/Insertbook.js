import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { insertbook } from '../../Store/Bookslise';
import { useRef } from 'react';
function Insertbook() {
  
  const {isloggedin} = useSelector((state)=>state.auther);
  const title = useRef(null);
  const price = useRef(null);
  const Description = useRef(null);

  const disputch = useDispatch();

  const handelsubmit = (e)=>{
    e.preventDefault();

    const data = {
      title: title.current.value,
      price: title.current.value,
      Description: Description.current.value,
    }
    disputch(insertbook(data));

    title.current.value = null;
    price.current.value= null;
    Description.current.value = null;

    console.log(data);

  }

  return (
    <Fragment>
    <Container>
    <h1>Form insert</h1>
    <div className='border border-secondary p-2 '>
        <form onSubmit={handelsubmit}>
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">ID</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={title}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
    <input type="number" className="form-control" id="exampleInputPassword1" ref={price}/>
  </div>
  <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ref={Description}></textarea>
</div>

  <button type="submit" className="btn btn-primary" disabled={!isloggedin}>Submit</button>
</form>
</div>
</Container>
    </Fragment>
  )
}

export default Insertbook;
