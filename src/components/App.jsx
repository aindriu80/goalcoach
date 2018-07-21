import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
class App extends Component {
    siginOut() {
        firebaseApp.auth().signOut();
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Goals</h3>
                    <AddGoal />
                    <div>Add Goal</div>
                    <div>Goal List</div>
                </div>
                <button
                    className="btn btn-danger"
                    onClick={() => this.siginOut()}
                >
                    Sign Out
                    </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return {}
}

export default connect(mapStateToProps, null)(App);