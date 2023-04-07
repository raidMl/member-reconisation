import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link ,useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

const NavMenu = () => {
    const navigate=useNavigate()

    return (
        <div>
                      <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item >
        <Nav.Link  eventKey="link-4"  onClick={()=>{navigate('/admin')}}>users list</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-0" onClick={()=>{navigate('/register')}} >Add user</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={()=>{navigate('/upload')}}>upload excel</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" onClick={()=>{navigate('/stat')}}>Statistics</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" onClick={()=>{navigate('/partmater')}}>admin info</Nav.Link>
      </Nav.Item>
      <Nav.Item style={{marginLeft:"10px",marginTop:'5px'}}><Button variant="secondary" size="sm" onClick={()=>{} }>delete All</Button> </Nav.Item>


    </Nav>
        </div>
    );
}

export default NavMenu;
