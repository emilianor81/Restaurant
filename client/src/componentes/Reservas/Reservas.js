import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import NavBar from "../Navbar/Navbar";
// import DatePicker from 'react-datepicker';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Reservas({ match }) {
  const history = useHistory()
  const [startDate, setStartDate] = useState(new Date());

  // function onChange(date){
  //   setDate(date);
  // }
  // const dispatch = useDispatch();


  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 1000);
  }, []);

  // if (!loading) {
  //   return <Loading />;
  // } else {
    return (
      <div>
        <NavBar/>
        <p>HOLA MUNDO!</p>
        <button className='Button' onClick={()=>history.push('/home')}>Back to Home</button>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        {/* <DatePicker selected={date} onChange={onChange(date)}/> */}
       
      </div>
    );

  }
// }