import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchUserFavorites } from '../actions/userFavoritesActions.js';
import { deleteFavorite } from '../actions/favoriteActions.js';
import MemberHomeCard from '../components/MemberHomeCard.js';
import Unsubscribe from '../components/Unsubscribe.js';

class MemberFavorites extends Component {

  componentDidMount() {
    if (this.props.userFavorites.length === 0) {
      this.props.user.favorites.forEach(favorite => {
        this.props.searchUserFavorites(favorite);
      });
    }
  };

  render() {
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
      <div className="MemberFavorite">
        <h1> Your Favorites, { this.props.user.name }! </h1>
        { this.props.userFavorites.length > 0 ? <h3  className="cardHolder">My Saved Favorites</h3> : ''}
        { showUserFavorites }
        <Unsubscribe history={this.props.history} />
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    user: state.user,
    userFavorites: state.userFavorites
  };
};

export default connect(mapStateToProps, { searchUserFavorites, deleteFavorite })(MemberFavorites);
