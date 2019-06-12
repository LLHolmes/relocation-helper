import React from 'react';
import { connect } from 'react-redux';
import { unsubscribeUser } from '../actions/userActions.js'

const Unsubscribe = ({ unsubscribeUser }) => {

  return (
    <div>
      <form onSubmit={ unsubscribeUser }>
        <input type="submit" value="Delete Account" />
      </form>
    </div>
  );
}

export default connect(null, { unsubscribeUser })(Unsubscribe);
