import React from 'react'
import Booksdetails from './Booksdetails';
import Bookslist from './Bookslist';
import { getbooks , deletebook} from '../../Store/Bookslise';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
function Bookscontainer() {
  const [selected, setselected] = useState()
  const {isloggedin} = useSelector((state)=>state.auther);

  const {isloading, book} = useSelector((state)=>state.books);

  const viewdataid = (id)=>{
      // console.log(id);
      const selectedbook = book.find((item)=>item.id == id);
      setselected((prev)=>{
        return{...prev, ...selectedbook};
      })
      // console.log(selectedbook);
  }
  const disputch = useDispatch();

  useEffect(()=>{
    disputch(getbooks());
  }, [disputch]);
  
  return (
    <div className='d-flex'>
    <Bookslist isloading={isloading} data={book} isloggedin={isloggedin} deletebook={deletebook} disputch={disputch}
    viewdataid={viewdataid} />
    <Booksdetails info={selected} />
    </div>
  )
}

export default Bookscontainer;
