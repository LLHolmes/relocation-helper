////////////////////////////////////////////////////////////////
// ACTIONS TO HANDLE CALLS TO ZILLOW API FROM THE SEARCH FORM //
////////////////////////////////////////////////////////////////

import { parseXML } from './actionHelper.js'
import { resetSearchForm } from './formSearchActions.js';

const ZWSID = process.env.REACT_APP_ZWSID;

const zillowSearchBase = `https://cors-anywhere.herokuapp.com/http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=${ZWSID}`
const zillowCompsBase = `https://cors-anywhere.herokuapp.com/http://www.zillow.com/webservice/GetDeepComps.htm?zws-id=${ZWSID}`

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


//// ASYNCHRONOUS ACTION CREATORS ////
// Search single home on Zillow API from search form
export const submitSearch = search => {

  if (search.cityState || search.zipcode) {
    let address = encodeURIComponent(search.street);
    let citystatezip = search.zipcode ? encodeURIComponent(search.zipcode) : encodeURIComponent(search.cityState);

    return dispatch => {
      return fetch(zillowSearchBase + `&address=${address}&citystatezip=${citystatezip}`)
      .then(response => response.text())
      .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
      .then(xml => {
        let searchedHome = parseXML(xml)
        if(searchedHome.street === "unknown") {
          dispatch(clearSearch())
          alert("Zillow could not find this home")
          dispatch(resetSearchForm())
        } else {
          dispatch(setSearch(searchedHome))
          dispatch(resetSearchForm())
          dispatch(findComps(searchedHome))
        }
      })
      .catch(error => {
        alert("Something went wrong. Please try again.")
      })
    };
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
