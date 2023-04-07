import React ,{ useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useSelector } from 'react-redux';
// import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import './css/navbar.css'
import darkimg from './images/mode-dark-svgrepo-com.svg'
import lightimg from './images/mode-light-svgrepo-com.svg'
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/authSlice';
import { toast } from 'react-toastify';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


const Navbare = () => {
  const  auth=useSelector(state=>state.auth )
  const dispatch=useDispatch()
   const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
      );
      const toggleTheme = () => {
        if (theme =='light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      };
      useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
      }, [theme]);
   
    const expand="md"
    return (
        <div>
                    <Navbar key={expand} bg="light" expand={expand} className="mb-3" style={{"borderBottom":"1.5px solid #1c6e4826"}}>
          <Container fluid>
            <Link to="/"> <Navbar.Brand >Membership</Navbar.Brand></Link> 
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                <Nav.Link><Link to='/users'>agent</Link></Nav.Link>
                  <NavDropdown
                    title="categories"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">more</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                       informations
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      other
                    </NavDropdown.Item>
                  </NavDropdown>
                  {auth._id?(<Row>
                    <Col> <Nav.Link><Link to="admin">Dashboard</Link></Nav.Link> </Col>

                    <Col><Button variant="danger" onClick={()=>{dispatch(logoutUser(null))
                      toast.warning("Logged out",{position:"bottom-left"})
                      }}>Logout</Button>

                         </Col></Row>
                           ):
                           <><Nav.Link><Link to='login'>login</Link></Nav.Link></>
                                  }
                 
                  

                </Nav>
             
                <button style={{"borderRadius":"50%","border":"none"}} onClick={()=>toggleTheme()}><img src={theme=="dark"?darkimg:lightimg} alt="bag"/></button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </div>
    );
}

export default Navbare;
