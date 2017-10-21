import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from 'firebase';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


 firebase.initializeApp({
    apiKey: "AIzaSyDxrpEWrmSEqIQrhYwGHocO6QUyHezwGhU",
    authDomain: "copygram-cf785.firebaseapp.com",
    databaseURL: "https://copygram-cf785.firebaseio.com",
    projectId: "copygram-cf785",
    storageBucket: "copygram-cf785.appspot.com",
    messagingSenderId: "25519115449"
});

ReactDOM.render(
  <App />, document.getElementById('root')
);
registerServiceWorker();
