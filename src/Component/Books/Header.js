import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { loginout } from '../../Store/Authslice';
function Header() {

  const disputch = useDispatch();
  const {isloggedin} = useSelector((state)=>state.auther);

  const {error} = useSelector((state)=>state.book);
  
  return (
    <Fragment>
    {error &&
    <>
    <div class="alert alert-danger" role="alert">
    {error}
    </div>
    </>
      }
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Book</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <button type="button" className="btn btn-primary" onClick={()=>disputch(loginout())}>
        {isloggedin ? 'Log out' : 'Log in'}
        </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </Fragment>
  )
}

export default Header;
