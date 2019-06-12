import { combineReducers } from 'redux';
import search from './searchReducer'
import user from './userReducer'
import userHomes from './userHomesReducer'
import userFavorites from './userFavoritesReducer'
import formLogin from './formLoginReducer'
import formSignup from './formSignupReducer'

const rootReducer = combineReducers({
  search,
  user,
  userHomes,
  userFavorites,
  formSignup,
  formLogin
});

export default rootReducer;
