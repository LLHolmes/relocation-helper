import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { unsubscribeUser } from '../actions/userActions.js';

const Unsubscribe = ({ history, unsubscribeUser }) => {

  const handleSubmit = event => {
    event.preventDefault();
    unsubscribeUser()
    .then(history.push('/'));
  };

  return (
    <div className="Unsubscribe">
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Delete Account" />
      </form>
    </div>
  );
};

export default withRouter(connect(null, { unsubscribeUser })(Unsubscribe));
