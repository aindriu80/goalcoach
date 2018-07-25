import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
class App extends Component {
  siginOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div style={{ margin: '5px' }}>
        <div>
          <h3>Goals</h3>
          <AddGoal />
          <GoalList />
        </div>
        <button className="btn btn-danger" onClick={() => this.siginOut()}>
          Sign Out
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log('state', state);
  return {};
}

export default connect(
  mapStateToProps,
  null
)(App);
