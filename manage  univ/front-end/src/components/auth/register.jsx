import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect  } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { registerUser } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import QrGen from  './../QrGen'
function Register() {
    const  auth=useSelector(state=>state.auth )
    console.log(auth)
     const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        qrcode:null,
        role:""
      

     });
     
    
     const dispatch=useDispatch()
     const navigate=useNavigate()
     const handleSubmit=(e)=>{
        e.preventDefault();
        // {()=>setUser({...user ,qrcode={}}
        dispatch(registerUser(user))
    }
     useEffect(() => {
      if(auth._id)

      {navigate('/admin')}
      
     }, [auth._id,navigate]);
  return (
    <Form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",alignItems:"center",margin:"50px auto"}}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>user-name</Form.Label>
        <Form.Control  type="text" placeholder="Enter your name"  style={{border:"1px solid #00000040"}}
        onChange={(e)=>setUser({...user ,name:e.target.value})}
        /></Form.Group>
       
        <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="email" placeholder="Enter email"  style={{border:"1px solid #00000040"}}
                onChange={(e)=>setUser({...user ,email:e.target.value})}

        />
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Label>role</Form.Label>
      <Form.Select size="" style={{width:"300px"}} aria-label="Default select example">
      <option disabled>choose role </option>
      <option value="student">student</option>
      <option value="agent">agent</option>
      <option value="teacher">teacher</option>
      onChange={(e)=>setUser({...user, role:e.target.value})}
    </Form.Select>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" style={{border:"1px solid #00000040"}} 
                onChange={(e)=>setUser({...user, password:e.target.value})}
        />
      </Form.Group>
      <Button  type='submit' variant="success">{auth.registerStatus=="pending"?"submiting":'Register'}</Button>
      {auth.registerStatus=="rejected"?<p>{auth.registerError}</p>:null
}
          </Form>
  );
}

export default Register;