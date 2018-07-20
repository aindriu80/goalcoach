import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';

class App extends Component {
    siginOut() {
        firebaseApp.auth().signOut();
    }

    render() {
        return (
            <div>
                App
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