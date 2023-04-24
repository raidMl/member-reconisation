import React,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import { Link ,useNavigate} from 'react-router-dom';
import  returnic from './../images/return.svg'
import TableCard from './TableCard';
import "./../css/bag.css"


import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { clearCart,addToCart,removeFromCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useGetAllusersQuery,useDeleteUserMutation } from '../../redux/UserApi';
import Nav from 'react-bootstrap/Nav';
import NavMenu from './navMenu';
import SearchBare from '../SearchBare';
const Admin = () => {
  const {data:items,isLoading,isSuccess,isError,error}=useGetAllusersQuery()
  const navigate=useNavigate()
  const  auth=useSelector(state=>state.auth )
  console.log("auth=========")
console.log(auth)
//   useEffect(() => {
//   // if(auth.role!="admin")
  if(!auth._id || auth.role!="admin")

  {navigate('/login')}
  
//  }, [auth.role]);
  console.log(items)
  if(isLoading && auth._id){return <p>Loading...</p>}
  else if(isError){return <p>{error}</p>}
  else if(isSuccess && auth._id && auth.role==="admin" ){
     console.log(auth)
     const sear='';
    return (
        <div className='cart-container'>
           
  <NavMenu></NavMenu>
<h2>users list</h2>  
{items==0?(<><div className='cart-empty'><p>there's no user</p></div></>


)
:(
    <><div>
                        <TableCard  items={items} searchf={sear}/>
                    </div><div className="cart-summary container">
                           

                        </div></>
)}     

 </div>
    );
}}

export default Admin;
