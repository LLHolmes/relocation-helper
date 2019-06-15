import React from 'react';

const CompHomeCard = ({ home, removeComp }) => {

  return (
    <fieldset className="CompHomeCard">
      <legend><h1 className="columnClear"><a href={home.link}>{ home.street }, { home.city }, { home.state } { home.zipcode}</a></h1></legend>
      <div className="col3">
        <p className="column">{ home.bedrooms } bed / { home.bathrooms } bath</p>
        <p className="column">{ home.sqFt } sqFt., { home.lotSize } lot</p>
        <p className="column">Built: { home.yearBuilt }</p>
      </div>
      <div>
        <h2>Sold { home.lastSoldDate } for ${ home.lastSoldPrice }</h2>
      </div>
        <p>Zestimate: ${ home.zestimate }</p>
        <button className="compDelete" onClick={() => removeComp(home.zpid)} >X</button>
    </fieldset>
  );
}

export default CompHomeCard;
