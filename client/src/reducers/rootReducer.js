import { combineReducers } from 'redux';
import search from './searchReducer'
import user from './userReducer'
import user_homes from './userHomesReducer'
import user_favorites from './userFavoritesReducer'

const rootReducer = combineReducers({
  search,
  user,
  user_homes,
  user_favorites
});

export default rootReducer;
