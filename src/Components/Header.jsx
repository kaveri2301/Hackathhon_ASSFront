import React from 'react'
import { Container, Nav,  Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <Container fluid>
    <Row>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link> <Link to='/'> Home </Link></Nav.Link>
            <Nav.Link> <Link to='/login'> Login </Link></Nav.Link>
            <Nav.Link> <Link to='/Createaccount'> Createaccount </Link></Nav.Link>
            <Nav.Link> <Link to='/pass'> PasswordRecovery </Link></Nav.Link>
            <Nav.Link> <Link to='/register'> Registration </Link></Nav.Link>
            <Nav.Link> <Link to='/table'> UserTable </Link></Nav.Link>
            <Nav.Link> <Link to='/updateform'> UpdateForm </Link></Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
    </Container>
    
    </>
  )
}





// import '../Assets/CSS/Navbar.css'
// import { Col, Container, Row, Nav, NavDropdown, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// export default function Navbarrr() {
//   return (
//     <>
//      <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
        
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link> <Link to= '/' > Home </Link></Nav.Link>
//             <Nav.Link> <Link to= '/aboutus' > About </Link></Nav.Link>
//             <Nav.Link> <Link to= '/courseus' > Courses</Link></Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
    
//     </>
//   )
// }
