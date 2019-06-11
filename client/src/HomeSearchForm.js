import React, { Component } from 'react';

// const baseUrl = "http://localhost:3000";

class HomeSearchForm extends Component {
  state = {
    street: '',
    cityState: '',
    zipcode: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSearch = event => {
    event.preventDefault();

    let params = this.state;

    ///fetch somehow from zillow here
  };

  render() {
    return (
      <div>
        Search homes:
        <form>
          <input
            type='text'
            name='street'
            value={this.state.street}
            onChange={this.handleChange}
            placeholder='street address'
            />
          <input
            type='text'
            name='cityState'
            value={this.state.cityState}
            onChange={this.handleChange}
            placeholder='city, state'
            />
          <input
            type='text'
            name='zipcode'
            value={this.state.zipcode}
            onChange={this.handleChange}
            placeholder='zipcode'
            />
          <button type='submit' onClick={this.handleSearch}>Search</button>
        </form>
      </div>
    );
  };
};

export default HomeSearchForm;
