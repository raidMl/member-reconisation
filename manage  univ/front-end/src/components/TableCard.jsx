import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { addToCart, removeFromCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
const TableCard = () => {
    const cart=useSelector((state)=>state.cart)
    const dispatch=useDispatch()
    const handleRemoveProd=(x)=>{
dispatch(removeFromCart(x))
    }

    const handleAddProd=(x)=>{
      dispatch(addToCart(x))
          }
       
       
    return (
        <div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>Role</th>
          <th>degre</th>
          {/* <th>delete</th> */}

        </tr>
      </thead>
      <tbody>
         {cart.usersItems.map(item=>{

         return(
          <tr key={item.id}>
          <td>${item.id}</td>
 
          <td><Row ><Col><img src={item.img} height='60' width='60' style={{"marginRight":"10px"}}  alt="" /></Col><Col>
          { item.name}</Col></Row>
          <Row><Col></Col><Col><p  style={{fontSize:12,color:'rgb(0 0 0 / 81%)'}}>{item.desc}</p></Col></Row>
          <Button variant="outline-danger" style={{"marginLeft":"20px"}} size="sm"  onClick={()=>handleRemoveProd(item)}>
           remove
        </Button>   
          </td>
          <td>${item.role}</td>
          <td>{item.degre}</td>
        </tr>)
         })}
      </tbody>
    </Table>
        </div>
    );
}

export default TableCard;
