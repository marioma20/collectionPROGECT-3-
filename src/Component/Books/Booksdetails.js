import React from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
function Booksdetails({info}) {

  return (
   <div className='w-50 '>
    <h1>Books Details</h1>
    {info.length > 0 ? <>
      <Container>
    <div className='border border-secondary p-2'>
    <p>{info.title}</p>
    <p>{info.price}</p>
    <p>{info.description}</p>
    </div>
    </Container>
    </> : 'no detailes for now'
    }

   </div>
  )
}

export default Booksdetails;
