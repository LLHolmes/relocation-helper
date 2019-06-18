import React from 'react';

const AssessmentHomeRow = ({ home }) => {

  return (
    <tr className="AssessmentHomeRow">
      <td>{home.street}, {home.city}, {home.state} {home.zipcode}</td>
      <td>{home.lastSoldPrice}</td>
      <td>{home.lastSoldDate}</td>
      <td>{home.assessment}</td>
      <td>{home.assessmentYear}</td>
      <td>{home.yearBuilt}</td>
      <td>{home.bedrooms} / {home.bathrooms}</td>
      <td>{home.sqFt}</td>
      <td>{home.lotSize}</td>
    </tr>
  );
}

export default AssessmentHomeRow;
