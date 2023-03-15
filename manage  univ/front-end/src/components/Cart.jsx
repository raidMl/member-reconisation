import React from 'react';
import Badge from 'react-bootstrap/Badge';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { decrement,addToCart } from '../redux/cartSlice';
import { useDispatch,useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import reacted from './images/physics.png'

const Cart = (props) => {
    // console.log(props)
    // const nbr=useSelector(state=>state.number)
    const navigate=useNavigate()  
    const dispatch=useDispatch();
    const handlerAdd=(x)=>{
      dispatch(addToCart(x))
      navigate('/bag')
    }

    return (
       
            <Col>
            
             <Card className='col-md-3' style={{ width: '15rem' }}>
      <Card.Img variant="top" src={props.img} height="200" width="100" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
         role:{props.role}
        </Card.Text>
        {props.degre!=""?(<h5>degre:L{props.degre}</h5>):null}

        <h4>code:{props.id}</h4>
        <Button variant="outline-primary" style={{ marginRight: '5px' }}>show student</Button>
        {/* <Button variant="outline-success fw-3" value={props.key} onClick={()=>handlerAdd(props)}>+</Button> */}
       
        {/* <Button variant="outline-dark m-1"  size="sm" style={{borderRadius:"50%",border:"none"}}>
          <img src={reacted} alt=""  />
    </Button> */}
      </Card.Body>
    </Card>
    </Col>   

    );
}

export default Cart;
