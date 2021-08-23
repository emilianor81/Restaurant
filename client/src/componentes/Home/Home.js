import Navbar from '../Navbar/Navbar'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getRestaurants } from '../../redux/Actions';
// import { searchRecipes, getRecipes } from '../../redux/Actions';
// import Recipe from '../../components/recipe/Recipe'


export default function Home (props){
//   const [recipe, setRecipes] = useState('');
  
useEffect(() => {
 getRestaurants();
}, [])
 
 const restaurantes = useSelector((state) => state.restaurants);
//   function handleChange(event) {
//     setRecipes(event.target.value)
//   }

//   function handleSubmit(e) {
//     e.preventDefault()
//     // props.searchRecipes(recipe)
//     setRecipes('')
//   }

  return (<div>
   <Navbar/>
   {restaurantes.map(e=> e)}
  </div>
  )
}
