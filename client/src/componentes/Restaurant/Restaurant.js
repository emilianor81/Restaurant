import React  from 'react';
import './Recipe.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchRecipeDetail } from '../../redux/Actions'
import image from '../../img/default.jpg'

function Recipe(props) {
  return(
      <div className='Recipe' >
           <div>
             <h3>{props.title} </h3> 
             <h5>Score : {props.score}</h5>
             <div className=''>   
              </div>
              <Link to="/reservas"><button className='buton' onClick={() => props.searchRecipeDetail(props.id)}>Reservar Mesa </button></Link> 
             <img src={props.img?props.img: image} className='RecipeImage' alt='recipe' />         
           </div>
      </div>
  )
}

function mapStateToProps(state) {
  return {
    diets: state.allDiets,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchRecipeDetail: recipe => dispatch(searchRecipeDetail(recipe)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)