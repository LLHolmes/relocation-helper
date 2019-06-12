import { combineReducers } from 'redux';
import search from './searchReducer'
import user_homes from './userHomesReducer'
import manageFavorites from './manageFavorites'

const rootReducer = combineReducers({
  search,
  user_homes,
  user_favorites: manageFavorites
});

export default rootReducer;
