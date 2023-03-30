import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { addToCart, removeFromCart,showUsers } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useEffect } from 'react';
import axios from 'axios';
const TableCard = (props) => {
    const cart=useSelector((state)=>state.cart)
    const dispatch=useDispatch()
    const handleRemoveProd=(x)=>{
dispatch(removeFromCart(x))
    }

    const handleAddProd=(x)=>{
      dispatch(addToCart(x))
          }
       
          useEffect(() => {
            axios.get('/localhost:5000/user')
              .then(res => {
                dispatch(showUsers(res.data));
              })
              .catch(err => {
                console.log(err);
              });
          }, [cart,dispatch]);
       
    return (
        <div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>Role</th>
          <th>faculty</th>
          {/* <th>delete</th> */}

        </tr>
      </thead>
      <tbody>
         {props.data.map(item=>{

         return(
          <tr key={item._id}>
          <td>{item._id}</td>
 
          <td><Row ><Col><img src={item.img} height='60' width='60' style={{"marginRight":"10px"}}  alt="" /></Col><Col>
          { item.name}</Col></Row>
          <Button variant="outline-primary" style={{"marginLeft":"20px",marginBottom:"5px"}} size="sm"  onClick={()=>null}>
           edit
        </Button>  
          <Button variant="outline-danger" style={{"marginLeft":"20px"}} size="sm"  onClick={()=>handleRemoveProd(item)}>
           remove
        </Button>   

    
          </td>
          <td>{item.role}</td>
          <td>{item.faculty}</td>
        </tr>)
         })}
      </tbody>
    </Table>
        </div>
    );
}

export default TableCard;
