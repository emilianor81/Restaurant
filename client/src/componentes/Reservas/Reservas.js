import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import NavBar from "../Navbar/Navbar";
import { addReservation, getReservations } from "../../redux/Actions";
// import DatePicker from 'react-datepicker';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Reservas({ match }) {
  const history = useHistory()
  const [startDate, setStartDate] = useState(new Date());

  // function onChange(date){
  //   setDate(date);
  // }
  const dispatch = useDispatch();


  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const id = match.params.id
   dispatch(getReservations(id)) ;
}, [])

const reservas = useSelector((state) => state.reservasId);

   let noDisponible = reservas.filter(e=> e.disponible < 1)


console.log(noDisponible, reservas)

  useEffect(() => {
    setTimeout(() => setLoading(true), 1000);
  }, []);
  if (!loading) {
    return <div> CARGANDO...</div>;
  } else {
    return (
      <div>
        <NavBar/>
        <h1>{match.params.nombre}</h1>
        <h3>Seleccione la fecha para su reserva</h3>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        {noDisponible.length?(<div>
        <h1>Fechas no Disponibles: </h1>
        <ul>
          {noDisponible.map(e=> e.fecha)}
        </ul>
        </div>):null

        }
        <button className='Button' onClick={()=>{let a= noDisponible.find(e=> e.fecha.includes( JSON.stringify(startDate).split('T')[0])); if (a){return console.log('a',a)}dispatch(addReservation([startDate, match.params.id])); alert('guarde su fecha de reserva '+ JSON.stringify(startDate).split('T')[0].concat('"')); history.push('/')}}>Crear reserva</button>       
        <button className='Button' onClick={()=>history.push('/')}>Back to Home</button>       
      </div>
    );

  }
}