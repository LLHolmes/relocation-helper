import { combineReducers } from 'redux';
import search from './searchReducer';
import user from './userReducer';
import userHomes from './userHomesReducer';
import userFavorites from './userFavoritesReducer';
import map from './mapReducer';
import formLogin from './formLoginReducer';
import formSignup from './formSignupReducer';
import formSearch from './formSearchReducer';

const rootReducer = combineReducers({
  search,
  user,
  userHomes,
  userFavorites,
  map,
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
  // map: {
  //   center: {
  //     lat: 39.8283,
  //     lng: 265.5795
  //   },
  //   zoom: 3
  //   }
//   formSignup: { name: '', email: '', password: '' }
//   formLogin: { email: '', password: '' }
//   formSearch: { street: '', cityState: '', zipcode: '' }
// }
