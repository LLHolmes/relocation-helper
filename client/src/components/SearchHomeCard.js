import React from 'react';

const SearchHomeCard = ({ user, home, homeParams, saveHome, saveFavorite }) => {

  return (
    <fieldset className="SearchHomeCard">
      <legend><h1 className="columnClear"><a href={home.link} target="_blank" rel="noopener noreferrer">{ home.street }, { home.city }, { home.state } { home.zipcode}</a></h1></legend>
      <div className="col3">
        <p className="column">{ home.bedrooms } bed / { home.bathrooms } bath</p>
        <p className="column">{ home.sqFt } sqFt., { home.lotSize } lot</p>
        <p className="column">Built: { home.yearBuilt }</p>
      </div>
        <p>Last sold on { home.lastSoldDate } for ${ home.lastSoldPrice }</p>
        <h3>Zestimate: ${ home.zestimate }</h3>
        <a className="zillow" target="_blank" rel="noopener noreferrer" href={home.link}>See more details for { home.street }, { home.city }, { home.state } { home.zipcode} on Zillow</a>
        { user ? <button className="saveHome" onClick={() => saveHome(homeParams, home)} >Save This Home</button> : '' }
        { user ? <button className="saveFavorite" onClick={() => saveFavorite(homeParams, home)} >Save As Favorite</button> : '' }
    </fieldset>
  );
}

export default SearchHomeCard;
