import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchUserHomes } from '../actions/userHomesActions.js';
import UserHomeCard from './UserHomeCard.js';

class UserHomeList extends Component {

  componentDidMount() {
    this.props.homes.forEach(home => {
      this.props.searchUserHomes(home);
    });
  };

  render() {
    const showUserHomes = this.props.userHomes.map((home, index) =>
      <UserHomeCard home={home} key={index} />
    );

    return (
      <div className="UserHomeList">
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

export default connect(mapStateToProps, { searchUserHomes })(UserHomeList);
