import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeComp } from '../actions/searchActions.js';
import CompHomeCard from './CompHomeCard.js';

class CompList extends Component {

  render() {
    const showComps = this.props.comps.map(home => {
      return <CompHomeCard key={home.zpid} home={home} removeComp={() => this.props.removeComp(home.zpid)} />
    });

    return (
      <div className="CompList">
        { this.props.comps.length > 0 ? <h3  className="cardHolder">Comparable Homes</h3> : ''}
        { showComps }
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    comps: state.search.comps
  };
};

export default connect(mapStateToProps, { removeComp })(CompList);
