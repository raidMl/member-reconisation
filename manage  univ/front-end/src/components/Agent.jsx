import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllusersQuery } from '../redux/UserApi';
import Cart from './Cart';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
const Agent = () => {
  const { data, error, isLoading } = useGetAllusersQuery();
  // const  {items,status}=useSelector(state=>state.products) //if using create async thunk

    return (
        <div className='home-container'>
{isLoading? 
 (<p>Loading...</p>):error?(   
    <p>An error occured !</p>
   ):
   (
   <>
   <h2>users</h2>
   <Container>
<Row>
   {data?.map(user=> 
   <Cart key={user.id} id={user.id} name={user.name} img={user.image} role={user.role} degre={user.degre} />
   
   )}
 </Row> </Container>
   </>)}
        </div>
    );
}

export default Agent;
