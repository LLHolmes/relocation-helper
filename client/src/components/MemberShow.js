import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchUserHomes } from '../actions/userHomesActions.js';
import { deleteHome } from '../actions/homeActions.js';
import { findComps, clearSearch } from '../actions/searchActions.js';
import UserHomeCard from './UserHomeCard.js';

class MemberShow extends Component {

  componentDidMount() {
    this.props.homes.forEach(home => {
      this.props.searchUserHomes(home);
    });
  };

  render() {
    const showUserHomes = this.props.userHomes.map(home => {
      return(
        <UserHomeCard
          key={home.apiId}
          home={home}
          deleteHome={() => this.props.deleteHome(home.apiId)}
          findComps={() => this.props.findComps(home.zpid)}
          clearSearch={this.props.clearSearch}
          source="user"
        />
      )
    });

    return (
      <div className="MemberShow">
        <h1> NEEDS TO BE WORKED ON!!! </h1>
        { this.props.userHomes.length > 0 ? <h3  className="cardHolder">My Saved Homes</h3> : ''}
        { showUserHomes }
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    homes: state.user.homes,
    userHomes: state.userHomes
  };
};

export default connect(mapStateToProps, { searchUserHomes, deleteHome, findComps, clearSearch })(MemberShow);