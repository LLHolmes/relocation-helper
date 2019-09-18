import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchUserHomes } from '../actions/userHomesActions.js';
import { deleteHome } from '../actions/homeActions.js';
import MemberHomeCard from '../components/MemberHomeCard.js';
import Unsubscribe from '../components/Unsubscribe.js';

class MemberFavorites extends Component {

  componentDidMount() {
    if (this.props.userHomes.length === 0) {
      this.props.user.homes.forEach(home => {
        this.props.searchUserHomes(home);
      });
    }
  };

  render() {
    const showUserHomes = this.props.userHomes.map(home => {
      return(
        <MemberHomeCard
          key={home.apiId}
          home={home}
          deleteHome={() => this.props.deleteHome(home.apiId)}
          clearSearch={this.props.clearSearch}
        />
      )
    });

    return (
      <div className="MemberShow">
        <h1> Welcome Home, { this.props.user.name }! </h1>
        { this.props.userHomes.length > 0 ? <h3  className="cardHolder">My Saved Homes</h3> : ''}
        { showUserHomes }
        <Unsubscribe history={this.props.history} />
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    user: state.user,
    userHomes: state.userHomes
  };
};

export default connect(mapStateToProps, { searchUserHomes, deleteHome })(MemberFavorites);
