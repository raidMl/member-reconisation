import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect  } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { registerUser } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavMenu from './navMenu';
//  import QrGen from './../components/QrGen';

// import { QRCodeSVG } from 'qrcode.react';
import QrGen from  '../QrGen'
function Register() {
    const  auth=useSelector(state=>state.auth )
    const dispatch=useDispatch()
    const navigate=useNavigate()
    // console.log(auth)

    useEffect(() => {
      if(auth.role!=="admin" || !auth._id)
        {navigate('/login')}
    
    }, [auth,navigate]);
    
     const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        qrcode:null,
        role:"student",
        faculty:"sciences",
        matricule:""
      

     });
     
     
    

     const handleSubmit=(e)=>{
        e.preventDefault();
        // {()=>setUser({...user ,qrcode={}}
        setUser({...user,id:user._id})
        dispatch(registerUser(user))
    }
       if(auth._id && auth.role==="admin")
  return (

<div><NavMenu></NavMenu>

    <Form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",alignItems:"center",margin:"50px auto"}}>


       <Row><Col>
      <Form.Group className="mb-3" >
      <Form.Label>role</Form.Label>
      <Form.Select 
      // value={selectedOption} onChange={handleChange} 
      onChange={(e)=>setUser({...user ,role:e.target.value})}

      size="" style={{width:"300px",margin:"0 auto"}} aria-label="Default select example"  >
      {/* <option disabled>choose role </option> */}
      <option  value="student">student</option>
      <option value="agent">agent</option>
      <option value="teacher">teacher</option>
          </Form.Select>
        </Form.Group></Col> 


        <Col> <Form.Group className="mb-3" >
      <Form.Label>faculty</Form.Label>
      <Form.Select 
      // value={selectedOption} onChange={handleChange} 
      onChange={(e)=>setUser({...user ,faculty:e.target.value})}

      size="" style={{width:"300px",margin:"0 auto"}} aria-label="Default select example"  >
      {/* <option disabled>choose role </option> */}
      <option  value="sciences">faculté des sciences</option>
      <option value="gestion">faculté de gestion</option>
      <option value="medcine"> faculté de medcine</option>
      <option value="biologie">faculté debiologie</option>

          </Form.Select>
        </Form.Group></Col> </Row>
      
      
      <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>user-name</Form.Label>
        <Form.Control  type="text" placeholder="Enter your name"  style={{border:"1px solid #00000040"}}
        onChange={(e)=>setUser({...user ,name:e.target.value })}
        /></Form.Group>
       
        <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="email" placeholder="Enter email"  style={{border:"1px solid #00000040"}}
                onChange={(e)=>setUser({...user ,email:e.target.value})}

        />
     </Form.Group>
     <Form.Group className="mb-3" >
        <Form.Label>matricule</Form.Label>
        <Form.Control  type="text" placeholder="enter car code"  style={{border:"1px solid #00000040"}}
                onChange={(e)=>setUser({...user ,matricule:e.target.value})}

        />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" style={{border:"1px solid #00000040"}} 
                onChange={(e)=>setUser({...user, password:e.target.value})}
        />
      </Form.Group>


      <QrGen userinfo={user.qrcode}/>



      <Button  type='submit' variant="success">{auth.registerStatus=="pending"?"submiting":'Register'}</Button>
      {auth.registerStatus=="rejected"?<p>{auth.registerError}</p>:null
}
          </Form></div>

  );
}

export default Register;