import Navbar from '../Navbar/Navbar'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getRestaurants } from '../../redux/Actions';
import Restaurant from '../Restaurant/Restaurant';
import './Home.css';
// import { searchRecipes, getRecipes } from '../../redux/Actions';
// import Recipe from '../../components/recipe/Recipe'


export default function Home (props){
//   const [recipe, setRecipes] = useState('');
const dispatch = useDispatch()

useEffect(() => {
    dispatch(getRestaurants()) ;
}, [])
 
 const restaurants = useSelector((state) => state.restaurants);
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
   
  <div id='restaurantes'>
   {restaurants.map(e=> 
    <div>
        {Restaurant(e)}
        
         </div>
         )}
     </div>
  </div>
  )
}
