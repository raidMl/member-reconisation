import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import  returnic from './images/return.svg'
import TableCard from './TableCard';
import "./css/bag.css"
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { clearCart,addToCart,removeFromCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useGetAllusersQuery } from '../redux/UserApi';


const Admin = () => {
    const { data, error, isLoading } = useGetAllusersQuery();

    const cart=useSelector((state)=>state.cart)
    const dispatch=useDispatch()
    const handleClearCart=()=>{
        dispatch(clearCart())
       }
   

       useEffect(() => {
       
      }, [cart,dispatch]);   
    return (
        <div className='cart-container'>
<h2>users list</h2>  
{cart.usersItems==0?(<><div className='cart-empty'><p>there's no user</p></div></>


)
:(
    <><div>
                        <TableCard />
                    </div><div className="cart-summary container">
                            <Button variant="secondary" size="sm" onClick={()=>{handleClearCart()} }>delete All</Button>
                           

                        </div></>
)}     

 </div>
    );
}

export default Admin;
