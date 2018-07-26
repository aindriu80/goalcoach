import * as firebase from 'firebase';

const config =
{
    apiKey: "AIzaSyB5VAxoa9kCRxvMv_Axe6b2pq0g8pvk9OM",
    authDomain: "goalcoach-3c675.firebaseapp.com",
    databaseURL: "https://goalcoach-3c675.firebaseio.com",
    projectId: "goalcoach-3c675",
    storageBucket: "",
    messagingSenderId: "777027455056"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');