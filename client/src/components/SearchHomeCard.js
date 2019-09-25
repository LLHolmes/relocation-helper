import React from 'react';

const SearchHomeCard = ({ user, search, saveHome, saveFavorite }) => {

  return (
    <fieldset className="SearchHomeCard">
      <legend><h1 className="columnClear"><a href={search.link} target="_blank" rel="noopener noreferrer">{ search.street }, { search.city }, { search.state } { search.zipcode}</a></h1></legend>
      <div className="col3">
        <p className="column">{ search.bedrooms } bed / { search.bathrooms } bath</p>
        <p className="column">{ search.sqFt } sqFt., { search.lotSize } lot</p>
        <p className="column">Built: { search.yearBuilt }</p>
      </div>
        <p>Last sold on { search.lastSoldDate } for ${ search.lastSoldPrice }</p>
        <h3>Zestimate: ${ search.zestimate }</h3>
        <a className="zillow" target="_blank" rel="noopener noreferrer" href={search.link}>See more details for { search.street }, { search.city }, { search.state } { search.zipcode} on Zillow</a>
        { user ? <button className="saveHome" onClick={() => saveHome()} >Save This Home</button> : '' }
        { user ? <button className="saveFavorite" onClick={() => saveFavorite()} >Save As Favorite</button> : '' }
    </fieldset>
  );
}

export default SearchHomeCard;
