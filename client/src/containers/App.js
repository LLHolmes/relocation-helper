import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { getCurrentUser } from '../actions/userActions.js'
import '../stylesheets/App.css';
import NavBar from './NavBar';
import Footer from '../components/Footer.js';
import MainContainer from './MainContainer';
import Signup from '../components/Signup';
import Login from '../components/Login';
import MemberShow from './MemberShow';
import AssessmentList from './AssessmentList';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  };

  render() {
    return (
      <div className="App">
        <div className="Nav">
          <NavBar />
        </div>
        <div className="MainBody">
          <Switch>
            <Route exact path ="/signup" render={() => (this.props.user ? (<Redirect to='/' />) : (<Signup />))} />
            <Route exact path ="/login" render={() => (this.props.user ? (<Redirect to='/' />) : (<Login />))} />
            <Route exact path ="/member/homes" render={() => (this.props.user ? (<MemberShow />) : (<Redirect to='/' />))} />
            <Route exact path = "/comps/index" render={() => (this.props.comps.length > 0 ? (<AssessmentList />) : (<Redirect to='/' />))} />
            <Route component={ MainContainer } />
          </Switch>
        </div>
        <div className="Foot">
          <Footer />
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    user: state.user,
    comps: state.search.comps
  };
};

export default connect(mapStateToProps, { getCurrentUser })(App);
