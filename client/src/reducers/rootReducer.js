import { combineReducers } from 'redux';
import search from './searchReducer'
import manageHomes from './manageHomes'
import manageFavorites from './manageFavorites'

const rootReducer = combineReducers({
  search,
  user_homes: manageHomes,
  user_favorites: manageFavorites
});

export default rootReducer;
