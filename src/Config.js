import firebase from 'firebase';

const configKeys = {
    apiKey: "AIzaSyCJXDPek-wdjP0S7h6CxQkqP6qvE5Fnq8U",
    authDomain: "here-hack.firebaseapp.com",
    databaseURL: "https://here-hack.firebaseio.com",
    projectId: "here-hack",
    storageBucket: "here-hack.appspot.com",
    messagingSenderId: "806834795238"
};

const Config = firebase.initializeApp(configKeys);

export { Config };