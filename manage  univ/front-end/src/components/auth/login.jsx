import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect  } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loginUser } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
    const  auth=useSelector(state=>state.auth )
    console.log(auth)
     const [user, setUser] = useState({
        email:"",
        password:""
     });
     const dispatch=useDispatch()
     const navigate=useNavigate()
     const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(loginUser(user))
     }
     useEffect(() => {
      if(auth._id)
      {navigate('/admin')}
      
     }, [auth._id,navigate]);
  return (
    <Form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",alignItems:"center",margin:"50px auto"}}>
      
       
        <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="email" placeholder="Enter email"  style={{border:"1px solid #00000040"}}
                onChange={(e)=>setUser({...user ,email:e.target.value})}

        />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" style={{border:"1px solid #00000040"}} 
                onChange={(e)=>setUser({...user, password:e.target.value})}
        />
      </Form.Group>
      <Button  type='submit' variant="success">{auth.loginStatus=="pending"?"submiting":'login'}</Button>
      {auth.registerStatus=="rejected"?<p>{auth.registerError}</p>:null
}
          </Form>
  );
}

export default Login;