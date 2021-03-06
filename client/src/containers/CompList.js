import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeComp } from '../actions/searchActions.js';
import CompHomeCard from '../components/CompHomeCard.js';
import CompMap from '../components/CompMap.js';

class CompList extends Component {

  render() {
    const { search, comps, removeComp } = this.props

    const showComps = comps.map(home => {
      return <CompHomeCard key={home.zpid} home={home} removeComp={() => removeComp(home.zpid)} />
    });

    return (
      <div className="CompList">
        <CompMap />
        { comps.length > 0 ? <h3  className="cardHolder">Comparable Homes to {search.street}, {search.city}, {search.state} {search.zipcode} </h3> : <h3>Enter a search or select a saved home to recieve comparable home information</h3>}
        { showComps }
        { comps.length > 0 ? <Link to='/comps/index'>Print-friendly List</Link> : ''}
      </div>
    );
  };
};

const mapStateToProps = ({ search }) => {
  return {
    search: search.compSearch,
    comps: search.comps
  };
};

export default connect(mapStateToProps, { removeComp })(CompList);
