import React from 'react';

const MemberHomeCard = ({ home, deleteHome, clearSearch }) => {

  return (
    <fieldset className="MemberHomeCard">
      <legend><h1 className="columnClear"><a href={home.link}>{ home.street }, { home.city }, { home.state } { home.zipcode}</a></h1></legend>
      <div className="col3">
        <p className="column">{ home.bedrooms } bed / { home.bathrooms } bath</p>
        <p className="column">{ home.sqFt } sqFt., { home.lotSize } lot</p>
        <p className="column">Built: { home.yearBuilt }</p>
      </div>
      <div className="uneven-col3">
        <h2>Zestimate: ${ home.zestimate }</h2>
      </div>
      <div>
        <p>Last assessed Value: ${ home.assessment.slice(0, -2) } in { home.assessmentYear }</p>
      </div>
      <button className="uneven-end" onClick={() => deleteHome(home.apiId)}>Remove from my list</button>
      <a className="zillow" href={home.link}>See more details for { home.street }, { home.city }, { home.state } { home.zipcode} on Zillow</a>
    </fieldset>
  );
}

export default MemberHomeCard;
