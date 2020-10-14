import React,{Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar,Nav, Button} from 'react-bootstrap'



const Header = () => {
    return (
      <Fragment>
      <Navbar collapseOnSelect expand="lg" >
           <Navbar.Brand href="#home"></Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="mr-auto">
                <Nav.Link className='link' href="#home"><span> Acceuil</span></Nav.Link>
                <Nav.Link className='link' href="#features"> A propos</Nav.Link>
                <Nav.Link className='link' href="#pricing"> Projets</Nav.Link>
                <Nav.Link className='link' href="#pricing"> Contact</Nav.Link>
            </Nav>
           
           </Navbar.Collapse>
       </Navbar>
  </Fragment>
    )
}

export default Header