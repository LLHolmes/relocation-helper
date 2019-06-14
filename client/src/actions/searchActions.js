import { resetSearchForm } from './formSearchActions.js';

const ZWSID = process.env.REACT_APP_ZWSID;

const zillowSearchBase = `https://cors-anywhere.herokuapp.com/http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=${ZWSID}`

export const setSearch = data => {
  return {
    type: "SEARCH_SUCCESS",
    data
  }
}


// asynchronous action creators
export const submitSearch = search => {

  let searchedHome = {
    zpid: '',
    link: '',
    street: '',
    zipcode: '',
    city: '',
    state: '',
    latitude: '',
    longitude: '',
    assessmentYear: '',
    assessment: '',
    yearBuilt: '',
    lotSize: '',
    sqFt: '',
    bathrooms: '',
    bedrooms: '',
    lastSoldDate: '',
    lastSoldPrice: '',
    zestimate: ''
  }

  if (search.street) {
    let address = encodeURIComponent(search.street);
    let citystatezip = search.zipcode ? encodeURIComponent(search.zipcode) : encodeURIComponent(search.cityState);

    return dispatch => {
      return fetch(zillowSearchBase + `&address=${address}&citystatezip=${citystatezip}`)
      .then(response => response.text())
      .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
      .then(xml => {
        searchedHome.zpid = xml.getElementsByTagName("zpid")[0].innerHTML;
        searchedHome.link = xml.getElementsByTagName("homedetails")[0].innerHTML;
        searchedHome.street = xml.getElementsByTagName("street")[0].innerHTML;
        searchedHome.zipcode = xml.getElementsByTagName("zipcode")[0].innerHTML;
        searchedHome.city = xml.getElementsByTagName("city")[0].innerHTML;
        searchedHome.state = xml.getElementsByTagName("state")[0].innerHTML;
        searchedHome.latitude = xml.getElementsByTagName("latitude")[0].innerHTML;
        searchedHome.longitude = xml.getElementsByTagName("longitude")[0].innerHTML;
        searchedHome.assessmentYear = xml.getElementsByTagName("taxAssessmentYear")[0].innerHTML;
        searchedHome.assessment = xml.getElementsByTagName("taxAssessment")[0].innerHTML;
        searchedHome.yearBuilt = xml.getElementsByTagName("yearBuilt")[0].innerHTML;
        searchedHome.lotSize = xml.getElementsByTagName("lotSizeSqFt")[0].innerHTML;
        searchedHome.sqFt = xml.getElementsByTagName("finishedSqFt")[0].innerHTML;
        searchedHome.bathrooms = xml.getElementsByTagName("bathrooms")[0].innerHTML;
        searchedHome.bedrooms = xml.getElementsByTagName("bedrooms")[0].innerHTML;
        searchedHome.lastSoldDate = xml.getElementsByTagName("lastSoldDate")[0].innerHTML;
        searchedHome.lastSoldPrice = xml.getElementsByTagName("lastSoldPrice")[0].innerHTML;
        searchedHome.zestimate = xml.getElementsByTagName("amount")[0].innerHTML;

        console.log(searchedHome)
        dispatch(setSearch(searchedHome))
        dispatch(resetSearchForm())
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
