import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import trash from './../images/trash1.svg'
import { useState } from 'react';
 import { useDeleteUserMutation } from '../../redux/UserApi';
import { useNavigate } from 'react-router-dom';

const TableCard = (props) => {

  const[deleteUser]=useDeleteUserMutation();
  const navigate=useNavigate()

const items=props.items;

// console.log(items);

       
  
    return (
        <div style={{"overflowX":"auto"}}>
            <Table striped bordered hover >
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
         {items.map(item=>{
         return(
          <tr key={item._id}>
          <td>{item._id}</td>
 
          <td><Row ><Col><img src={item.image} height='60' width='60' style={{"marginRight":"10px"}}  alt="" /></Col><Col>
          { item.name}</Col></Row>
          <Button variant="outline-primary" style={{"marginLeft":"20px",marginBottom:"5px"}} size="sm"  onClick={()=>{navigate("/edit/",{state:{item}})}}>
           edit
        </Button>  
           <Button variant="" style={{"marginLeft":"20px"}} size="sm"  onClick={()=>deleteUser({id:item._id})}>
           <img src={trash} alt="" />
           
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
