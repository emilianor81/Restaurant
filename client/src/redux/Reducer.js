const initialState = {
  restaurants: [],
  restaurantSearch: [],
  allTables: [],

  // recipeDetail: {},
  // addedRecipe: {},
}

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_RESTAURANTS":
      return {
        ...state,
        restaurants: action.payload,
      };
    case "SEARCH_RESTAURANT":
      return {
        ...state,
        restaurantSearch: action.payload,
      };
    case "ADD_RESTAURANT":
      return {
        ...state,
        addedRecipe: action.payload,
      };
    case "DELETE_RESTAURANT":
      return {
        ...state,
        allDiets: action.payload,
      };
    case "UPDATE_RESTAURANT":
      return {
        ...state,
        allDiets: action.payload,
      };
    case "SELECT_TABLE":
      return {
        ...state,
        recipeDetail: action.payload,
      };
      case "ALL_TABLES":
      return {
        ...state,
        restaurants: action.payload,
      };
    default:
      return state;
  };
};
