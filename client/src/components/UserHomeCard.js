import React from 'react';

const UserHomeCard = ({ home }) => {
  return (
    <fieldset className="UserHomeCard">
      <legend><h1 className="columnClear">{ home.search.street }, { home.search.cityState } { home.search.zipcode}</h1></legend>
      <div className="col3">
        <p className="column">{ home.bedrooms } bed/{ home.bathrooms } bath</p>
        <p className="column">{ home.sqFt } sqFt., { home.lotSize } lot</p>
        <p className="column">Built: { home.yearBuilt }</p>
      </div>
      <h3>Estimated value: ${ home.zestimate }</h3>
    </fieldset>
  );
}

export default UserHomeCard;
