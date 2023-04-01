import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useEffect } from 'react';
import { usersFetch } from '../../redux/ProductSlice';

const TableCard = (props) => {
  const  {items,status,error}=useSelector(state=>state.users)  // console.log("raid")
  console.log(items)

    const dispatch=useDispatch()



       
          useEffect(() => {
            
         dispatch(usersFetch())
          }, [dispatch]);

          useEffect(() => {
            
             }, []);
       
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
         {items.map(item=>{
console.log(items)
         (
          <tr key={item._id}>
          <td>{item._id}</td>
 
          <td><Row ><Col><img src={item.image} height='60' width='60' style={{"marginRight":"10px"}}  alt="" /></Col><Col>
          { item.name}</Col></Row>
          <Button variant="outline-primary" style={{"marginLeft":"20px",marginBottom:"5px"}} size="sm"  onClick={()=>null}>
           edit
        </Button>  
          <Button variant="outline-danger" style={{"marginLeft":"20px"}} size="sm"  onClick={()=>{}}>
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
