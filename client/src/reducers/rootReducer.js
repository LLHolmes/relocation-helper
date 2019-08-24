import { combineReducers } from 'redux';
import search from './searchReducer';
import user from './userReducer';
import userHomes from './userHomesReducer';
import userFavorites from './userFavoritesReducer';
import formLogin from './formLoginReducer';
import formSignup from './formSignupReducer';
import formSearch from './formSearchReducer';

const rootReducer = combineReducers({
  search,
  user,
  userHomes,
  userFavorites,
  formSignup,
  formLogin,
  formSearch
});

export default rootReducer;

// FOR REFERENCE:
// storeInitialState = {
//   search: {
//     search: {},
//     compSearch: {},
//     comps: [{}, {}, {}...]
//   },
//   user: null,
//   userHomes: [],
//   userFavorites: [],
//   formSignup: { name: '', email: '', password: '' }
//   formLogin: { email: '', password: '' }
//   formSearch: { street: '', cityState: '', zipcode: '' }
// }
