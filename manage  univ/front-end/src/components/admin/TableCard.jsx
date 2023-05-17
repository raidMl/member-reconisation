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
import ImageChecker from './imgchecker';
import Form from 'react-bootstrap/Form';
import scan from '.././images/qr_code_scanner_black_24dp.svg'
import "./../css/searchbar.css"
import myimg from '../../images/c61c381634ab5e0d4ff3.jpg.png';
import importImage from './importImage'

const TableCard = (props) => {
  const [SearchF,setSearch]=useState('')

  const[deleteUser]=useDeleteUserMutation();
  const navigate=useNavigate()
const items=props.items;

// console.log(items);
const[qrimg,setQrimg]=useState('')   

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
          if(item.image!=null){
          //let imageSrc = importImage(item.image);
          let imageSrc = null

          console.log('---------------');
          console.log(imageSrc)
          console.log('---------------');

            //  setQrimg(imageSrc) 
          }   
         return(
          <tr key={item._id}>
          <td>{item.email}</td>
          <td><Row ><Col>
          {/* {item.image!==""?
          <img src={require(`../../images/${item.image}`)} height='60' width='60' style={{"marginRight":"10px"}}  alt="" />
          :<img src={require(`../../images/c61c381634ab5e0d4ff3.jpg.png`)} height='60' width='60' style={{"marginRight":"10px"}}  alt="" />
         } */}
          {/* <img src={(item.image!="" || item.image!=null ||  require(`../../images/${item.image}`))?require(`../../images/${item.image}`):myimg} height='60' width='60' style={{"marginRight":"10px"}}  alt="" /> */}
          <img src ={item.image==""?require(`./../../images/${item.image}`):myimg}        onError={console.log("dad in img")}height='60' width='60' style={{"marginRight":"10px"}}  alt="image" /> 
          {/* <ImageChecker imagePath="../../images/c61c381634ab5e0d4ff3.jpg.png"/> */}

          </Col><Col>

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
