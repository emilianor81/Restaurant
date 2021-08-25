import React  from 'react';
import './Restaurant.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom'
// import { searchRecipeDetail } from '../../redux/Actions'
// import image from '../../img/default.jpg'

import Navbar from '../Navbar/Navbar'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getRestaurants } from '../../redux/Actions';
/*
// import { searchRecipes, getRecipes } from '../../redux/Actions';
// import Recipe from '../../components/recipe/Recipe'


export default function Home (props){
  //   const [recipe, setRecipes] = useState('');
  
  //   function handleChange(event) {
    //     setRecipes(event.target.value)
    //   }
    
    //   function handleSubmit(e) {
      //     e.preventDefault()
      //     // props.searchRecipes(recipe)
      //     setRecipes('')
      //   }
      console.log(restaurants)
      return (
        <div>
        <Navbar/>
        <ul>
        {restaurants.map(e=> 
          <li>
          <h6>Nombre: {e.nombre}</h6>
          <h6>Ciudad: {e.ciudad}</h6>
          <h6>Descripcion: {e.descripcion}</h6>
          </li>)}
          </ul>
          </div>
          )
          
          
          
          
          <button className='buton' onClick={() => props.searchRecipeDetail(props.id)}>
        }*/
        
        function Restaurant(props) {
          // const restaurants = useSelector((state) => state.restaurants);
          // const dispatch = useDispatch()
          
          // useEffect(() => {
          //     dispatch(getRestaurants()) ;
          // }, [])
          const history = useHistory();
          return(
            <div className='Recipe' >
           <div>
             <h3 className='RecipeName'>{props.nombre} </h3> 
             <h5>Ciudad : {props.ciudad}</h5>
             <h6>Direccion : {props.direccion}</h6>
             <h6 className='RecipeInfo'>Descripcion : {props.descripcion}</h6>
             <img className='Imagen' src={props.foto} alt='url no valida' /> 
             <div className=''>   
              </div>
              <button className='Button' onClick={()=>history.push(`/reservas/${props.id}/${props.nombre}`)}>Resevar mesa</button> 
           </div>
      </div>
  )
}

export default Restaurant