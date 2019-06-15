export const parseXML = xml => {
  let searchedHome = {};

  if(!!xml.getElementsByTagName("zpid")[0]) {
    searchedHome.zpid = xml.getElementsByTagName("zpid")[0].innerHTML;
  } else {
    searchedHome.zpid = "unknown";
  };
  if(!!xml.getElementsByTagName("homedetails")[0]) {
    searchedHome.link = xml.getElementsByTagName("homedetails")[0].innerHTML;
  } else {
    searchedHome.link = "unknown";
  };
  if(!!xml.getElementsByTagName("street")[0]) {
    searchedHome.street = xml.getElementsByTagName("street")[0].innerHTML;
  } else {
    searchedHome.street = "unknown";
  };
  if(!!xml.getElementsByTagName("zipcode")[0]) {
    searchedHome.zipcode = xml.getElementsByTagName("zipcode")[0].innerHTML;
  } else {
    searchedHome.zipcode = "unknown";
  };
  if(!!xml.getElementsByTagName("city")[0]) {
    searchedHome.city = xml.getElementsByTagName("city")[0].innerHTML;
  } else {
    searchedHome.city = "unknown";
  };
  if(!!xml.getElementsByTagName("state")[0]) {
    searchedHome.state = xml.getElementsByTagName("state")[0].innerHTML;
  } else {
    searchedHome.state = "unknown";
  };
  if(!!xml.getElementsByTagName("latitude")[0]) {
    searchedHome.latitude = xml.getElementsByTagName("latitude")[0].innerHTML;
  } else {
    searchedHome.latitude = "unknown";
  };
  if(!!xml.getElementsByTagName("longitude")[0]) {
    searchedHome.longitude = xml.getElementsByTagName("longitude")[0].innerHTML;
  } else {
    searchedHome.longitude = "unknown";
  };
  if(!!xml.getElementsByTagName("taxAssessmentYear")[0]) {
    searchedHome.assessmentYear = xml.getElementsByTagName("taxAssessmentYear")[0].innerHTML;
  } else {
    searchedHome.assessmentYear = "unknown";
  };
  if(!!xml.getElementsByTagName("taxAssessment")[0]) {
    searchedHome.assessment = xml.getElementsByTagName("taxAssessment")[0].innerHTML;
  } else {
    searchedHome.assessment = "unknown";
  };
  if(!!xml.getElementsByTagName("yearBuilt")[0]) {
    searchedHome.yearBuilt = xml.getElementsByTagName("yearBuilt")[0].innerHTML;
  } else {
    searchedHome.yearBuilt = "unknown";
  };
  if(!!xml.getElementsByTagName("lotSizeSqFt")[0]) {
    searchedHome.lotSize = xml.getElementsByTagName("lotSizeSqFt")[0].innerHTML;
  } else {
    searchedHome.lotSize = "unknown";
  };
  if(!!xml.getElementsByTagName("finishedSqFt")[0]) {
    searchedHome.sqFt = xml.getElementsByTagName("finishedSqFt")[0].innerHTML;
  } else {
    searchedHome.sqFt = "unknown";
  };
  if(!!xml.getElementsByTagName("bathrooms")[0]) {
    searchedHome.bathrooms = xml.getElementsByTagName("bathrooms")[0].innerHTML;
  } else {
    searchedHome.bathrooms = "unknown";
  };
  if(!!xml.getElementsByTagName("bedrooms")[0]) {
    searchedHome.bedrooms = xml.getElementsByTagName("bedrooms")[0].innerHTML;
  } else {
    searchedHome.bedrooms = "unknown";
  };
  if(!!xml.getElementsByTagName("lastSoldDate")[0]) {
    searchedHome.lastSoldDate = xml.getElementsByTagName("lastSoldDate")[0].innerHTML;
  } else {
    searchedHome.lastSoldDate = "unknown";
  };
  if(!!xml.getElementsByTagName("lastSoldPrice")[0]) {
    searchedHome.lastSoldPrice = xml.getElementsByTagName("lastSoldPrice")[0].innerHTML;
  } else {
    searchedHome.lastSoldPrice = "unknown";
  };
  if(!!xml.getElementsByTagName("amount")[0]) {
    searchedHome.zestimate = xml.getElementsByTagName("amount")[0].innerHTML;
  } else {
    searchedHome.zestimate = "unknown";
  };

  return searchedHome;
}

// searchedHome = {
//     search,   /// OR FOR COMPS: /// score: '',
//     zpid: '',
//     link: '',
//     street: '',
//     zipcode: '',
//     city: '',
//     state: '',
//     latitude: '',
//     longitude: '',
//     assessmentYear: '',
//     assessment: '',
//     yearBuilt: '',
//     lotSize: '',
//     sqFt: '',
//     bathrooms: '',
//     bedrooms: '',
//     lastSoldDate: '',
//     lastSoldPrice: '',
//     zestimate: ''
//   }
