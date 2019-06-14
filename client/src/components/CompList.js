import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeComp } from '../actions/searchActions.js';
import UserHomeCard from './UserHomeCard.js';

class CompList extends Component {

  // componentDidMount() {
  //   this.props.homes.forEach(home => {
  //     this.props.searchUserHomes(home);
  //   });
  // };

  render() {
    console.log(this.props.comps)
    const showComps = this.props.comps.map(home => {
      return <UserHomeCard key={home.zpid} home={home} removeComp={() => this.props.removeComp(home.zpid)} />
    });

    return (
      <div className="CompList">
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
