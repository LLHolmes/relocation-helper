import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { getCurrentUser } from './actions/userActions.js'
import './stylesheets/App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer.js';
import MainContainer from './components/MainContainer';
import Signup from './components/Signup';
import Login from './components/Login';
// import Unsubscribe from './components/Unsubscribe';
import MemberShow from './components/MemberShow';
// import HomeSearchForm from './components/HomeSearchForm';

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
          { this.props.user ? (
              <Switch>
                <Route exact path ="/member/homes" component={ MemberShow } />
                <Route component={ MainContainer } />
                <Redirect from="/signup" to="/"/>
                <Redirect from="/login" to="/"/>
              </Switch>
            ) : (
              <Switch>
                <Route exact path ="/signup" component={ Signup } />
                <Route exact path ="/login" component={ Login } />
                <Route component={ MainContainer } />
                <Redirect from="/member/homes" to="/login"/>
              </Switch>
            )
          }
        </div>
        <div className="Foot">
          <Footer />
        </div>
      </div>
    );
  };
};

const mapStateToProps = ({ user }) => {
  return {
    user
  };
};

export default connect(mapStateToProps, { getCurrentUser })(App);

// <Route exact path ="/signup" component={ Signup } />
// <Route exact path ="/login" component={ Login } />
// { user ? <Route exact path ="/member/homes" component={ MemberShow } /> : <Redirect from="/member/homes" to="/login"}
// <Route component={ MainContainer } />

// { user =>
//   user ? (
//     <Switch>
//       <Route exact path ="/signup" component={ Signup } />
//       <Route exact path ="/login" component={ Login } />
//       <Route exact path ="/member/homes" component={ MemberShow } />
//       <Route component={ MainContainer } />
//     </Switch>
//   ) : (
//     <Switch>
//       <Route exact path ="/signup" component={ Signup } />
//       <Route exact path ="/login" component={ Login } />
//       <Route component={ MainContainer } />
//       <Redirect from="/member/homes" to="/login"/>
//     </Switch>
//   )
// }
