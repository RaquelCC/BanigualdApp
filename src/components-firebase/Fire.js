import * as firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyB4TthlNF3Dw5lAqKjEsY2qu00paaokZ28",
    authDomain: "banigualdapp.firebaseapp.com",
    databaseURL: "https://banigualdapp.firebaseio.com",
    projectId: "banigualdapp",
    storageBucket: "banigualdapp.appspot.com",
    messagingSenderId: "1035650502228"
};
const fire = firebase.initializeApp(config);

export default fire;
