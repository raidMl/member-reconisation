import React ,{useEffect}from 'react';
import NavMenu from '../navMenu';
import { useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom';
const Stat = () => {
    const auth=useSelector(state=>state.auth)
    const navigate=useNavigate()
     useEffect(() => {
    if(!auth._id || auth.role!=="admin")
    {navigate('/login')}
},[auth._id])

    if(auth._id && auth.role==="admin")
    return (
        <div>
            <NavMenu></NavMenu>
            stat page
        </div>
    );
}

export default Stat;
