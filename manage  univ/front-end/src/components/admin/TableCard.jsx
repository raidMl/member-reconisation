import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import trash from './../images/trash1.svg'
import { useState } from 'react';
 import { useDeleteUserMutation } from '../../redux/UserApi';
import { useNavigate } from 'react-router-dom';
import SearchBare from '../SearchBare';
import { useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import scan from '.././images/qr_code_scanner_black_24dp.svg'
import "./../css/searchbar.css"
import myimg from '../../images/c61c381634ab5e0d4ff3.jpg.png';

const TableCard = (props) => {
  const [SearchF,setSearch]=useState('')

  const[deleteUser]=useDeleteUserMutation();
  const navigate=useNavigate()
const items=props.items;

// console.log(items);
const[qrimg,setQrimg]=useState(myimg)   
  
    return (
        <div>
             <Form className="myform">
               <button onClick="" style={{'border':'none'}}> <img className='blackImg' src={scan} alt="bag" style={{}}/></button>

               <Form.Control onChange={(e)=>setSearch(e.target.value)}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    
                  />
                </Form>
        <div style={{"overflowX":"auto"}}>
         
            <Table striped bordered hover >
      <thead>
        <tr>
          <th>email</th>
          <th>name</th>
          <th>Role</th>
          <th>faculty</th>

        </tr>
      </thead>
      <tbody>
        
         {items.filter((fitem)=>{
          return SearchF.toLowerCase()===''?fitem
          :(fitem.name.toLowerCase().includes(SearchF)||(fitem.email.toLowerCase().includes(SearchF)))
         }).map(item=>{
          let mypathimg= item?`../../images/${item.image}`:null
          //
            setQrimg(mypathimg)    
         return(
          <tr key={item._id}>
          <td>{item.email}</td>
          <td><Row ><Col><img src={qrimg} height='60' width='60' style={{"marginRight":"10px"}}  alt="" /></Col><Col>

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
    </div>      </div>
    );
}

export default TableCard;
