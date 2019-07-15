////////////////////////////////////////////////////////////////
// ACTIONS TO HANDLE CALLS TO ZILLOW API FROM THE SEARCH FORM //
////////////////////////////////////////////////////////////////

import { parseXML } from './actionHelper.js'
import { resetSearchForm } from './formSearchActions.js';

const ZWSID = process.env.REACT_APP_ZWSID;

const zillowSearchBase = `https://cors-anywhere.herokuapp.com/http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=${ZWSID}`
const zillowCompsBase = `https://cors-anywhere.herokuapp.com/http://www.zillow.com/webservice/GetDeepComps.htm?zws-id=${ZWSID}`

const baseUrl = 'http://localhost:3000';

//// SYNCHRONOUS ACTION CREATORS ////
export const setSearch = data => {
  return {
    type: "SEARCH_SUCCESS",
    data
  }
}

export const clearSearch = () => {
  return {
    type: "CLEAR_SEARCH"
  }
}

export const setComps = data => {
  return {
    type: "COMP_SUCCESS",
    data
  }
}

export const setCompSearch = data => {
  return {
    type: "COMP_SEARCH_SUCCESS",
    data
  }
}

export const removeComp = zpid => {
  return {
    type: "REMOVE_COMP",
    zpid
  }
}

export const hardClearSearch = () => {
  return {
    type: "HARD_CLEAR_SEARCH"
  }
}


//// ASYNCHRONOUS ACTION CREATORS ////
// Search single home on Zillow API from search form input
export const submitSearch = search => {
  // If necessary information is provided, call to backend to complete search.
  if (search.cityState || search.zipcode) {
    return dispatch => {
      return fetch(baseUrl + '/search_home', {
        credentials: "include",
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(search)
      })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          dispatch(clearSearch())
          alert(data.error)
          dispatch(resetSearchForm())
        } else {
          dispatch(setSearch(data))
          dispatch(resetSearchForm())
          dispatch(findComps(data))
        }
      })
    };
  // Else alert user and clear search forms.
  } else {
    alert("Please enter city and state or zipcode.");
    return dispatch => {
      dispatch(resetSearchForm())
      dispatch(clearSearch())
    };
  };
}

// Find comps of single searched home on Zillow API
export const findComps = searchedHome => {

  let comps = [];
  let comparable = {};

  let zpid = encodeURIComponent(searchedHome.zpid);
  let count = 15

  return dispatch => {
    return fetch(zillowCompsBase + `&zpid=${zpid}&count=${count}`)
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(xml => xml.getElementsByTagName('comp'))
    .then(xml => {
      for (let tag of xml) {
        comparable = parseXML(tag)
        if(!!tag.getAttribute('score')) {
          comparable.score = tag.getAttribute('score');
        };
        comps.push(comparable)
      }
      comps.sort((a, b) => (parseInt(b.score) - parseInt(a.score)))

      dispatch(setComps(comps))
      dispatch(setCompSearch(searchedHome))
    })
    .catch(error => {
      alert("Something went wrong. Please try again.")
    })
  };
}
