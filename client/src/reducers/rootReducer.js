import { combineReducers } from 'redux';
import search from './searchReducer'
import user_homes from './userHomesReducer'
import user_favorites from './userFavoritesReducer'

const rootReducer = combineReducers({
  search,
  user_homes,
  user_favorites
});

export default rootReducer;
