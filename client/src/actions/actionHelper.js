export const parseXML = xml => {
  let searchedHome = {};

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

  return searchedHome;
}
