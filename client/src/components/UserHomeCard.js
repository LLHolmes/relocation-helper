import React from 'react';

const UserHomeCard = ({ home, deleteHome, findComps, clearSearch }) => {

  const submitForComps = event => {
    event.preventDefault();
    clearSearch();
    findComps(home.zpid);
  };

  return (
    <fieldset className="UserHomeCard">
      <legend><h1 className="columnClear"><a href={home.link}>{ home.street }, { home.city }, { home.state } { home.zipcode}</a></h1></legend>
      <div className="col3">
        <p className="column">{ home.bedrooms } bed / { home.bathrooms } bath</p>
        <p className="column">{ home.sqFt } sqFt., { home.lotSize } lot</p>
        <p className="column">Built: { home.yearBuilt }</p>
      </div>
      <div className="uneven-col3">
        <button className="uneven-end" onClick={() => deleteHome(home.apiId)}>Remove from my list</button>
        <h3 className="uneven-middle">Estimated value: ${ home.zestimate }</h3>
        <button className="uneven-end" onClick={submitForComps}>Find Comps</button>
      </div>
    </fieldset>
  );
}

export default UserHomeCard;
