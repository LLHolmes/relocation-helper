import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchUserHomes } from '../actions/userHomesActions.js';
import { deleteHome } from '../actions/homeActions.js';
import MemberHomeCard from '../components/MemberHomeCard.js';
import Unsubscribe from '../components/Unsubscribe.js';

class MemberShow extends Component {

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

    const showUserFavorites = this.props.userFavorites.map(favorite => {
      return(
        <MemberHomeCard
          key={favorite.apiId}
          home={favorite}
          deleteHome={() => this.props.deleteFavorite(favorite.apiId)}
          clearSearch={this.props.clearSearch}
        />
      )
    });

    return (
      <div className="MemberShow">
        <h1> Welcome Home, { this.props.user.name }! </h1>
        { this.props.userHomes.length > 0 ? <h3  className="cardHolder">My Saved Homes</h3> : ''}
        { showUserHomes }
        { this.props.userFavorites.length > 0 ? <h3  className="cardHolder">My Favorites</h3> : ''}
        { showUserFavorites }
        <Unsubscribe history={this.props.history} />
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    user: state.user,
    userHomes: state.userHomes,
    userFavorites: state.userFavorites
  };
};

export default connect(mapStateToProps, { searchUserHomes, deleteHome })(MemberShow);
