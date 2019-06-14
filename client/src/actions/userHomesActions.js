////////////////////////////////////////////////////////////////////
// ACTIONS TO HANDLE CALLS TO ZILLOW API FOR A USER'S SAVED HOMES //
////////////////////////////////////////////////////////////////////

import { parseXML } from './actionHelper.js'

const ZWSID = process.env.REACT_APP_ZWSID;

const zillowSearchBase = `https://cors-anywhere.herokuapp.com/http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=${ZWSID}`

export const setUserHomeSearch = data => {
  return {
    type: "SEARCH_USERHOME_SUCCESS",
    data
  }
}

export const removeUserSearchedHome = id => {
  return {
    type: "REMOVE_USER_SEARCHED_HOME",
    id
  }
}


// asynchronous action creators (zillow)
export const searchUserHomes = search => {

  let searchedHome = {
    apiId: search.id
  }

  let address = encodeURIComponent(search.street);
  let citystatezip = search.zipcode ? encodeURIComponent(search.zipcode) : encodeURIComponent(search.cityState);

  return dispatch => {
    return fetch(zillowSearchBase + `&address=${address}&citystatezip=${citystatezip}`)
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(xml => {
      searchedHome = {...searchedHome, ...parseXML(xml)}
      dispatch(setUserHomeSearch(searchedHome))
    })
    .catch(error => {
      console.log(error)
    })
  };
}
