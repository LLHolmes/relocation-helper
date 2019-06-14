export const parseXML = xml => {
  let searchedHome = {};

  if(!!xml.getElementsByTagName("zpid")[0]) {
    searchedHome.zpid = xml.getElementsByTagName("zpid")[0].innerHTML;
  };
  if(!!xml.getElementsByTagName("homedetails")[0]) {
    searchedHome.link = xml.getElementsByTagName("homedetails")[0].innerHTML;
  };
  if(!!xml.getElementsByTagName("street")[0]) {
    searchedHome.street = xml.getElementsByTagName("street")[0].innerHTML;
  };
  if(!!xml.getElementsByTagName("zipcode")[0]) {
    searchedHome.zipcode = xml.getElementsByTagName("zipcode")[0].innerHTML;
  };
  if(!!xml.getElementsByTagName("city")[0]) {
    searchedHome.city = xml.getElementsByTagName("city")[0].innerHTML;
  };
  if(!!xml.getElementsByTagName("state")[0]) {
    searchedHome.state = xml.getElementsByTagName("state")[0].innerHTML;
  };
  if(!!xml.getElementsByTagName("latitude")[0]) {
    searchedHome.latitude = xml.getElementsByTagName("latitude")[0].innerHTML;
  };
  if(!!xml.getElementsByTagName("longitude")[0]) {
    searchedHome.longitude = xml.getElementsByTagName("longitude")[0].innerHTML;
  };
  if(!!xml.getElementsByTagName("taxAssessmentYear")[0]) {
    searchedHome.assessmentYear = xml.getElementsByTagName("taxAssessmentYear")[0].innerHTML;
  };
  if(!!xml.getElementsByTagName("taxAssessment")[0]) {
    searchedHome.assessment = xml.getElementsByTagName("taxAssessment")[0].innerHTML;
  };
  if(!!xml.getElementsByTagName("yearBuilt")[0]) {
    searchedHome.yearBuilt = xml.getElementsByTagName("yearBuilt")[0].innerHTML;
  };
  if(!!xml.getElementsByTagName("lotSizeSqFt")[0]) {
    searchedHome.lotSize = xml.getElementsByTagName("lotSizeSqFt")[0].innerHTML;
  };
  if(!!xml.getElementsByTagName("finishedSqFt")[0]) {
    searchedHome.sqFt = xml.getElementsByTagName("finishedSqFt")[0].innerHTML;
  };
  if(!!xml.getElementsByTagName("bathrooms")[0]) {
    searchedHome.bathrooms = xml.getElementsByTagName("bathrooms")[0].innerHTML;
  };
  if(!!xml.getElementsByTagName("bedrooms")[0]) {
    searchedHome.bedrooms = xml.getElementsByTagName("bedrooms")[0].innerHTML;
  };
  if(!!xml.getElementsByTagName("lastSoldDate")[0]) {
    searchedHome.lastSoldDate = xml.getElementsByTagName("lastSoldDate")[0].innerHTML;
  };
  if(!!xml.getElementsByTagName("lastSoldPrice")[0]) {
    searchedHome.lastSoldPrice = xml.getElementsByTagName("lastSoldPrice")[0].innerHTML;
  };
  if(!!xml.getElementsByTagName("amount")[0]) {
    searchedHome.zestimate = xml.getElementsByTagName("amount")[0].innerHTML;
  };
  
  return searchedHome;
}
