import React from 'react'
import { Container } from 'react-bootstrap';
import Header from './Header';
import Insertbook from './Insertbook';
import Bookscontainer from './Bookscontainer';

function Books() {
  return (
    <>
    <Header/>
    <Container className='mt-5'>
    <Insertbook/>
    <hr className='mt-5 mb-5'/>
    <Bookscontainer/>
    </Container>
    </>
  )
}

export default Books;
