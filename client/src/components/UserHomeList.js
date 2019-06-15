import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchUserHomes } from '../actions/userHomesActions.js';
import { deleteHome } from '../actions/homeActions.js';
import UserHomeCard from './UserHomeCard.js';

class UserHomeList extends Component {

  componentDidMount() {
    this.props.homes.forEach(home => {
      this.props.searchUserHomes(home);
    });
  };

  render() {
    const showUserHomes = this.props.userHomes.map(home => {
      return <UserHomeCard key={home.apiId} home={home} deleteHome={() => this.props.deleteHome(home.apiId)} source="user" />
    });

    return (
      <div className="UserHomeList">
        <h3  className="cardHolder">My Saved Homes</h3>
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

export default connect(mapStateToProps, { searchUserHomes, deleteHome })(UserHomeList);
