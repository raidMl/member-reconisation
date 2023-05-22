import { useState ,useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Table from 'react-bootstrap/Table';
import './../css/userinfo.css'
import NavMenu from './navMenu';
import { useSelector } from 'react-redux';
const Userinfo=()=> {
    const params = useLocation();
    const myitem=params.state.item;
    console.log(myitem)
  
       
        const [user, setUser] = useState({
           id:myitem._id, //alhamdolilah
           name:myitem.name,
           email:myitem.email,
           password:myitem.password,
           qrcode:myitem.image?`./../../images/${myitem.image}`:"",
           role:myitem.role,
           faculty:myitem.faculty,
           matricule:myitem.matricule
         
        });
    return (
        <div>
            <NavMenu></NavMenu>
            <div className='container'>
                <img className='imginfo' src ={myitem.image?require(`./../../images/${myitem.image}`):null} alt="" />
           <div className=''>
            <Table className='' striped bordered hover>
            <tbody>
            <tr><td>user-name:</td><td>{user.name}</td></tr>
            <tr><td>email:</td><td>{user.email}</td></tr>
            <tr><td>role:</td><td>{user.role}</td></tr>
            <tr><td>faculty:</td><td>{user.faculty}</td></tr>
            <tr><td>isin:</td><td>{myitem.isin}</td></tr>
            <tr><td>created at:</td><td>{myitem.createdAt}</td></tr>
            <tr><td>updated at:</td><td>{myitem.updatedAt}</td></tr>
            <tr><td>user-id:</td><td>{user.id}</td></tr>
            <tr><td>password:</td><td>{user.password}</td></tr>
            </tbody>
</Table>



            </div>
            
            </div>
            
            
        </div>
    );
}

export default Userinfo;