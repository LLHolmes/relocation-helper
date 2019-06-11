import { combineReducers } from 'redux';
import manageSearches from './manageSearches'
import manageHomes from './manageHomes'
import manageFavorites from './manageFavorites'

const rootReducer = combineReducers({
  search: manageSearches,
  user_homes: manageHomes,
  user_favorites: manageFavorites
});

export default rootReducer;
