import React, { useState } from 'react';
// import './create.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addRestaurant, getRestaurants } from '../../redux/Actions';
import NavBar from '../Navbar/Navbar';

function Create(props) {
  // const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    title: '',
    city: '',
    description: '',
    adress: '',
    picture: '',
  })

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form)
    props.addRestaurant(form);
    // props.getRestaurants();
    alert('Recipe Created Successfully');
  }


  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

   return (
    <div className='NewR'>
      <NavBar/>
      
      <form className='RecipeForm' onSubmit={(e) => handleSubmit(e)}>
        <div className='CreateForm'>
          <label className='LabelTitle'>Nombre:</label>
          <input type='text' name='title' onChange={handleInputChange} />
          <label className='LabelTitle'>Descripción:</label>
          <input type='text' name='description' onChange={handleInputChange} />
          <label className='LabelTitle'>direccion:</label>
          <input type='text' name='adress' onChange={handleInputChange} />
          {/* <input type='text' name='adress' onChange={(e) => setForm({ ...form, adress: e.target.value })} /> */}
          {/* <label className='LabelTitle'>Dirección:</label> */}
          {/* <input type='number' min='0' max='100' name='healthScore'
            onChange={(e) => setForm({ ...form, healthScore: e.target.value })} /> */}
          <label className='LabelTitle'>Ciudad:</label>
          <textarea name='city' onChange={handleInputChange} />

          <label className='LabelTitle'>Foto:</label>
          <textarea name='picture' onChange={(e) => setForm({ ...form, picture: e.target.value })} />
        </div>
        <div className='DietsAndSubmitButton'>
          {/* <label className='LabelTitle'> Diets: </label>
          {props.diets.map(d => <label className='DietsLabel' key={d.id}><input type='checkbox' name={d.name} value={d.name}
            onChange={(e) => setForm({ ...form, diets: [...form.diets, e.target.value] })}
          />{d.name}</label>)} */}
          <button className='CreateSubmitButton' type='submit'>Submit</button>
          {/* <button className='CreateSubmitButton' type='submit'>Submit2222</button> */}

                  </div>
      </form> 
      <button className='CreateSubmitButton' ><Link className='Link' to='/'>Back to Home</Link></button>

    </div>
  )
}

function mapStateToProps(state) {
  return {
    diets: state.allDiets,
    // user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addRestaurant: info => dispatch(addRestaurant(info)),
    // getRestaurants: () => dispatch(getRestaurants())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)