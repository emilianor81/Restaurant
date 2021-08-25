import axios from 'axios';

export function getRestaurants() {
  return function (dispatch) {
    axios.get('http://localhost:3001/restaurant')
      .then(res => dispatch({
        type: 'ALL_RESTAURANTS',
        payload: res.data
      })
      ).catch(err => {
        console.error(err)
      });
  };
};

export function getReservations(payload) {
  return function (dispatch) {
    axios.get('http://localhost:3001/reserva?id='+ payload )
    .then(res => dispatch({
        type: 'ALL_RESERVATIONS',
        payload: res.data
      })
      ).catch(err => {
        console.error('error',err)
      });
  };
};

export function searchRestaurant(restaurant) {
  if (restaurant !== '') {
    return function (dispatch) {
      axios.get(`http://localhost:3001/restaurant?name=${restaurant}`)
       .then(res => dispatch({
          type: 'SEARCH_RESTAURANT',
          payload: res.data
        })
        ).catch(err => {
          console.error(err)
        });
    };
  } else {
    return {
      type: 'SEARCH_RESTAURANT',
      payload: []
    }
  };
};


export function addRestaurant(Restaurant) {
  return function (dispatch) {
    console.log(Restaurant, 'paaa')
    axios.post(`http://localhost:3001/restaurant`, Restaurant)
    // .then(res => dispatch({
    //     type: 'ADD_RESTAURANT',
    //     payload: res.data
    //   })
      // )
      .catch(err => {
        console.error(err)
      });
  }
}

export function addReservation(payload) {
  return function (dispatch) {
    axios.post(`http://localhost:3001/reserva`, payload)
      .catch(err => {
        console.error(err)
      });
  }
}

// export function deleteRestaurant(id) {
//   return (dispatch) => {
//     axios.delete(`http://localhost:3001/restaurant/${id}`)
//     .then(response => {
//        dispatch({
//         type: DELETE_RESTAURANT,
//         payload: id
//       })
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }
// }

// UPDATE_RESTAURANT
// export async function editRestaurant(id, payload) {
//   // console.log('entra aca')
//   await axios.put("http://localhost:3001/admin/productos/" + id, payload)
//     .then((response) => {
//       if (response) alert('El producto se modificó correctamente');
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// export function searchRecipeDetail(recipeId) {
//   return function (dispatch) {
//     axios.get(`http://localhost:3001/recipes/${recipeId}`)
//      .then(res => dispatch({
//         type: 'SEARCH_RECIPE_DETAIL',
//         payload: res.data
//       })
//       ).catch(err => {
//         console.error(err)
//       });
//   };
// };


// export function getDiets() {
//   return function (dispatch) {
//     axios.get(`http://localhost:3001/types`)
//      .then(res => dispatch({
//         type: 'ALL_DIETS',
//         payload: res.data
//       })
//       ).catch(err => {
//         console.error(err)
//       });
//   };
// };
