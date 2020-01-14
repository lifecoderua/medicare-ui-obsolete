import * as firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAYhQBOC2BdyH5KN29cfec8H1DFG_3DbkM",
  authDomain: "medicare-4ccfe.firebaseapp.com",
  databaseURL: "https://medicare-4ccfe.firebaseio.com",
  projectId: "medicare-4ccfe",
  storageBucket: "medicare-4ccfe.appspot.com",
  messagingSenderId: "793358878810",
  appId: "1:793358878810:web:3747de3a7947eaadc83063",
  measurementId: "G-DYLBCH4VKE"
};

class Firebase {
  public db;
  
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.db = firebase.firestore();
  }
}

const store = new Firebase();

export default store;