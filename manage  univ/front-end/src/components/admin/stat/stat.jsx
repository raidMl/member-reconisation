import React ,{useEffect}from 'react';
import NavMenu from '../navMenu';
import { useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import './stat.css';
import employer from './../../images/person-svgrepo-com.svg'
import student from './../../images/student-person-part-2-svgrepo-com.svg'
ChartJS.register(ArcElement, Tooltip, Legend);

const Stat = () => {
    const auth=useSelector(state=>state.auth)
    const navigate=useNavigate()
    const data = {
        labels: [
          'Student',
          'Teacher',
          'Employer'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [4999, 300, 200],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
     useEffect(() => {
    if(!auth._id || auth.role!=="admin")
    {navigate('/login')}
},[auth._id])

    if(auth._id && auth.role==="admin")
    return (
        <div>
            <NavMenu></NavMenu>
            <div>
                    <div className='items'>
        <div className='itemx'  > <img src={student} alt="" /><h3>4999</h3> <p>student</p>    </div>
        <div className='itemx'  > <img src={employer} alt="" /> <h3>300</h3> <p>teacher</p>    </div>
        <div className='itemx'  ><img src={employer} alt="" />  <h3>200</h3> <p>employer</p>     </div>

        </div> 
        
        <div className='spincircle'>     
        <div className='div1'> <Doughnut data={data} />    </div>
        </div>
        </div>

        </div>
    );
}

export default Stat;
