import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchUserHomes } from '../actions/userHomesActions.js';
import { deleteHome } from '../actions/userActions.js';
import UserHomeCard from './UserHomeCard.js';

class UserHomeList extends Component {

  componentDidMount() {
    // IS THIS RE-FETCHING EVERYTIME??? SHOULD BE SAVED IN STORE...
    // console.log(this.props.userHomes)
    if(this.props.userHomes.length === 0){
      this.props.homes.forEach(home => {
        this.props.searchUserHomes(home);
      });
    };
  };

  render() {
    const showUserHomes = this.props.userHomes.map(home =>
      <UserHomeCard home={home} key={home.apiId} deleteHome={deleteHome} />
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

export default connect(mapStateToProps, { searchUserHomes, deleteHome })(UserHomeList);
