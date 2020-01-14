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

  

    // try {
    //   await db.enablePersistence();
    //   this.setState({persistence: 'Offline support activated!'});
    // } catch(err) {
    //     if (err.code == 'failed-precondition') {
    //         // Multiple tabs open, persistence can only be enabled
    //         // in one tab at a a time.
    //         // ...
    //         this.setState({persistence: 'Another tab is open, please close one of the tabs!'})
    //     } else if (err.code == 'unimplemented') {
    //         // The current browser does not support all of the
    //         // features required to enable persistence
    //         // ...
    //         this.setState({persistence: 'Offline support UNAVAILABLE!'})
    //     }
    // };

    // await db.disableNetwork();
    // console.log('network disabled');

    // await db.enableNetwork();
    // console.log('network enabled');
}

const store = new Firebase();

export default store;