import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import  returnic from './../images/return.svg'
import TableCard from './TableCard';
import "./../css/bag.css"
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { clearCart,addToCart,removeFromCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useGetAllusersQuery } from '../../redux/UserApi';
import Nav from 'react-bootstrap/Nav';


const Admin = () => {
  const  {items,status,error}=useSelector(state=>state.users) 
    console.log(items)
  console.log(status)

    const dispatch=useDispatch()
    const handleClearCart=()=>{
        dispatch(clearCart())
       }
   

       
    return (
        <div className='cart-container'>
            <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item >
        <Nav.Link  eventKey="link-4" >users list</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-0" >Add user</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">upload excel</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Statistics</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">admin info</Nav.Link>
      </Nav.Item>
      <Nav.Item style={{marginLeft:"10px",marginTop:'5px'}}><Button variant="secondary" size="sm" onClick={()=>{handleClearCart()} }>delete All</Button> </Nav.Item>


    </Nav>
<h2>users list</h2>  
{items==0?(<><div className='cart-empty'><p>there's no user</p></div></>


)
:(
    <><div>
                        <TableCard  alluser={items}/>
                    </div><div className="cart-summary container">
                           

                        </div></>
)}     

 </div>
    );
}

export default Admin;
