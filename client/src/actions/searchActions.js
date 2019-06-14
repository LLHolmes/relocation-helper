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

export const setComps = data => {
  console.log("in setComps sync action")
  return {
    type: "COMP_SUCCESS",
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

  if (search.street) {
    let address = encodeURIComponent(search.street);
    let citystatezip = search.zipcode ? encodeURIComponent(search.zipcode) : encodeURIComponent(search.cityState);

    return dispatch => {
      return fetch(zillowSearchBase + `&address=${address}&citystatezip=${citystatezip}`)
      .then(response => response.text())
      .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
      .then(xml => {
        let searchedHome = parseXML(xml)
        dispatch(setSearch(searchedHome))
        dispatch(resetSearchForm())
        dispatch(findComps(searchedHome))
      })
      .catch(error => {
        alert("Something went wrong. Please try again.")
      })
    };
  } else {
    alert("Please fill out your street address.");
    return dispatch => {
      dispatch(resetSearchForm())
    };
  };
}

// Find comps of single searched home on Zillow API
export const findComps = search => {

  let comps = [];
  let comparable = {};

  let zpid = encodeURIComponent(search.zpid);
  let count = 5

  return dispatch => {
    return fetch(zillowCompsBase + `&zpid=${zpid}&count=${count}`)
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(xml => xml.getElementsByTagName('comp'))
    .then(xml => {
      console.log("LET'S PARSE!!!")
      console.log(xml)
      // console.log(xml[0])
      // console.log(Array.from(xml.childNodes)) // same as xml.getElementsByTagName('comp') on 121
      // console.log("Expect: 4.0")
      // console.log(!!xml[0].getAttribute('score'))
      // console.log(xml[0].getElementsByTagName("homedetails")[0].innerHTML)
      // let comps = xml.getElementsByTagName('comparables')[1];
      // console.log(comps)

      // comps = xml.map(comp => {
      //   console.log(comp)
      //   debugger
      // })
      // let comps = [...xml]
      // xml.map(comp => {
      //   console.log(comp)
      //   // let house = {};


      // *********** HERE I AM!!!

                for (let i = 0; i < count; i++) {
                  console.log(xml[i])
                  if(!!xml[i].getAttribute('score')) {
                    comparable.score = xml[i].getAttribute('score');
                  };
                  if(!!xml[i].getElementsByTagName("zpid")[0]) {
                    comparable.zpid = xml[i].getElementsByTagName("zpid")[0].innerHTML;
                  };
                  // if(!!xml[i].getElementsByTagName("homedetails")[0]) {
                  //   searchedHome.link = xml[i].getElementsByTagName("homedetails")[0].innerHTML;
                  // };
                  // if(!!xml[i].getElementsByTagName("street")[0]) {
                  //   searchedHome.street = xml[i].getElementsByTagName("street")[0].innerHTML;
                  // };
                  // if(!!xml[i].getElementsByTagName("zipcode")[0]) {
                  //   searchedHome.zipcode = xml[i].getElementsByTagName("zipcode")[0].innerHTML;
                  // };
                  // if(!!xml[i].getElementsByTagName("city")[0]) {
                  //   searchedHome.city = xml[i].getElementsByTagName("city")[0].innerHTML;
                  // };
                  // if(!!xml[i].getElementsByTagName("state")[0]) {
                  //   searchedHome.state = xml[i].getElementsByTagName("state")[0].innerHTML;
                  // };
                  // if(!!xml[i].getElementsByTagName("latitude")[0]) {
                  //   searchedHome.latitude = xml[i].getElementsByTagName("latitude")[0].innerHTML;
                  // };
                  // if(!!xml[i].getElementsByTagName("longitude")[0]) {
                  //   searchedHome.longitude = xml[i].getElementsByTagName("longitude")[0].innerHTML;
                  // };
                  // if(!!xml[i].getElementsByTagName("taxAssessmentYear")[0]) {
                  //   searchedHome.assessmentYear = xml[i].getElementsByTagName("taxAssessmentYear")[0].innerHTML;
                  // };
                  // if(!!xml[i].getElementsByTagName("taxAssessment")[0]) {
                  //   searchedHome.assessment = xml[i].getElementsByTagName("taxAssessment")[0].innerHTML;
                  // };
                  // if(!!xml[i].getElementsByTagName("yearBuilt")[0]) {
                  //   searchedHome.yearBuilt = xml[i].getElementsByTagName("yearBuilt")[0].innerHTML;
                  // };
                  // if(!!xml[i].getElementsByTagName("lotSizeSqFt")[0]) {
                  //   searchedHome.lotSize = xml[i].getElementsByTagName("lotSizeSqFt")[0].innerHTML;
                  // };
                  // if(!!xml[i].getElementsByTagName("finishedSqFt")[0]) {
                  //   searchedHome.sqFt = xml[i].getElementsByTagName("finishedSqFt")[0].innerHTML;
                  // };
                  // if(!!xml[i].getElementsByTagName("bathrooms")[0]) {
                  //   searchedHome.bathrooms = xml[i].getElementsByTagName("bathrooms")[0].innerHTML;
                  // };
                  // if(!!xml[i].getElementsByTagName("bedrooms")[0]) {
                  //   searchedHome.bedrooms = xml[i].getElementsByTagName("bedrooms")[0].innerHTML;
                  // };
                  // if(!!xml[i].getElementsByTagName("lastSoldDate")[0]) {
                  //   searchedHome.lastSoldDate = xml[i].getElementsByTagName("lastSoldDate")[0].innerHTML;
                  // };
                  // if(!!xml[i].getElementsByTagName("lastSoldPrice")[0]) {
                  //   searchedHome.lastSoldPrice = xml[i].getElementsByTagName("lastSoldPrice")[0].innerHTML;
                  // };
                  // if(!!xml[i].getElementsByTagName("amount")[0]) {
                  //   searchedHome.zestimate = xml[i].getElementsByTagName("amount")[0].innerHTML;
                  // };

                  // comps = [...comps, searchedHome]
                  console.log(comparable)
                  console.log(comps)
                  comps.push(comparable)
                  console.log(comps)
                }
      console.log("THROUGH FOR LOOP")
      console.log(comps)
      // console.log(comps[2])


      // dispatch(setComps(comps))
    })
    .catch(error => {
      alert("Something went wrong. Please try again.")
    })
  };
}
