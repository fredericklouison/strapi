import React,{Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar,Nav} from 'react-bootstrap'



const Header = () => {
    return (
      <Fragment>
      <Navbar className='Navbar'collapseOnSelect expand="lg" >
           <Navbar.Brand href="#home"></Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="mr-auto">
                <Nav.Link className='link' href="http://localhost:3000/"><span> Acceuil</span></Nav.Link>
                <Nav.Link className='link' href="http://localhost:3000/about/"> A propos</Nav.Link>
                <Nav.Link className='link' href="http://localhost:3000/Projets/"> Projets</Nav.Link>
                <Nav.Link className='link' href="http://localhost:3000/Contact/"> Contact</Nav.Link>
            </Nav>
           
           </Navbar.Collapse>
       </Navbar>
  </Fragment>
    )
}

export default Header