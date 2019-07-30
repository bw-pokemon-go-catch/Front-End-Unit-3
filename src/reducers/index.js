import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  DELETE_DATA_START,
  DELETE_DATA_SUCCESS,DELETE_DATA_FAILURE,POST_DATA_START,POST_DATA_FAILURE,POST_DATA_SUCCESS
} from "../actions";

const initialState = {
  registering: false,
  error: "",
  pokemon: [],
  loggingIn: false,
  token: localStorage.getItem("token"),
  userId: localStorage.getItem("userId"),
  fetchingData: false,
postingData:false,
  user_id: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        registering: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registering: false
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registering: false
      };
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        token: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload,
        userId: action.payload.userId
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: "LOGIN FAILURE",
        loggingIn: false
      };
    case FETCH_DATA_START:
      return {
        ...state,
        error: "",
        fetchingData: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: "",
        pokemon: action.payload,
        fetchingData: false
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        fetchingData: false,
        pokemon: [],
        error: action.payload
      };

    case DELETE_DATA_START:
      return {
        ...state,
        error: "",
        fetchingData: true
      };
    case DELETE_DATA_SUCCESS:
      return {
        ...state,
        error: "",
        pokemon: state.pokemon.filter(poke => poke.id !== action.payload),
        fetchingData: false
      };
    case DELETE_DATA_FAILURE:
      return {
        ...state,
        fetchingData: false,
        pokemon: [],
        error: action.payload
      };


      case POST_DATA_START:	
			return {	
				...state,	
				postingData : true,	
				error         : '',	
			};	
		case POST_DATA_SUCCESS:	
			return {	
				...state,	
				postingData : false,	
				pokemon : [ ...state.pokemon, action.payload ],	
			};	
		case POST_DATA_FAILURE:	
			return {	
				...state,	
				postingData: false,	
				error         : action.payload,	
			};	

    // case STAMP_RESTAURANT_FAILURE:
    //     return {
    //         ...state,
    //         stampedRestaurants: [],
    //         error: action.payload
    //     }
    default:
      return state;
  }
};

export default reducer;
