import React from 'react';

const MemberHomeCard = ({ home, deleteHome, clearSearch }) => {

  return (
    <fieldset className="MemberHomeCard">
      <legend><h1 className="columnClear"><a href={home.link} target="_blank" rel="noopener noreferrer">{ home.street }, { home.city }, { home.state } { home.zipcode}</a></h1></legend>
      <div className="col3">
        <p className="column">{ home.bedrooms } bed / { home.bathrooms } bath</p>
        <p className="column">{ home.sqFt } sqFt., { home.lotSize } lot</p>
        <p className="column">Built: { home.yearBuilt }</p>
      </div>
      <div className="uneven-col3">
        <h2>Zestimate: ${ home.zestimate }</h2>
      </div>
      <div>
        <p>Sold { home.lastSoldDate } for ${ home.lastSoldPrice }</p>
      </div>
      <div>
        <p>Last assessed Value: ${ home.assessment.slice(0, -2) } in { home.assessmentYear }</p>
      </div>
      <div>
        <button className="MemberRemoveButton" onClick={() => deleteHome(home.apiId)}>Remove from my list</button>
      </div>
      <a className="zillow" target="_blank" rel="noopener noreferrer" href={home.link}>See more details for { home.street }, { home.city }, { home.state } { home.zipcode} on Zillow</a>
    </fieldset>
  );
}

export default MemberHomeCard;
