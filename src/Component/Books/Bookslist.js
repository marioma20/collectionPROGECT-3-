import React from 'react'
import { Container } from 'react-bootstrap';

function Bookslist({isloading, data, isloggedin, deletebook, disputch, viewdataid}) {

  const booklist = data.length > 0 ? data.map((book)=>{

    return(
      <>
             <li className='d-flex justify-content-between border border-secondary p-2' key={book.id}>
                <div>{book.title}</div>
                <div>
                <button type="button" className="btn btn-primary" onClick={()=>viewdataid(book)}>View</button>
                <button type="button" className="btn btn-danger" disabled={!isloggedin} onClick={()=>disputch(deletebook(book))}>Delete</button>
                </div>
            </li>
      </>
    );
  }): " there is no data";
  return (
          <div className='w-50'>
      <Container>
        <h1 className=''> Book List</h1>
        {isloading ? 'loading...': 
        <>
          <ul>
            {booklist}
        </ul>
        </>
        }
        
      
      </Container>
    </div>
  )
}

export default Bookslist;
