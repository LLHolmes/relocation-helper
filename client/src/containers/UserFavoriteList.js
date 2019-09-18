import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchUserFavorites } from '../actions/userFavoritesActions.js';
import { deleteFavorite } from '../actions/favoriteActions.js';
import { findComps, clearSearch } from '../actions/searchActions.js';
import UserHomeCard from '../components/UserHomeCard.js';

class UserFavoriteList extends Component {

  componentDidMount() {
    if (this.props.userFavorites.length === 0) {
      this.props.favorites.forEach(favorite => {
        this.props.searchUserFavorites(favorite);
      });
    };
  };

  render() {
    const showUserFavorites = this.props.userFavorites.map(favorite => {
      return(
        <UserHomeCard
          key={favorite.apiId}
          home={favorite}
          deleteHome={() => this.props.deleteFavorite(favorite.apiId)}
          findComps={() => this.props.findComps(favorite)}
          clearSearch={this.props.clearSearch}
        />
      )
    });

    return (
      <div className="UserHomeList">
        { this.props.userFavorites.length > 0 ? <h3  className="cardHolder">My Favorites</h3> : ''}
        { showUserFavorites }
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    favorites: state.user.favorites,
    userFavorites: state.userFavorites
  };
};

export default connect(mapStateToProps, { searchUserFavorites, deleteFavorite, findComps, clearSearch })(UserFavoriteList);
