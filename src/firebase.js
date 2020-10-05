import  firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDiktSDscsiPlgDM79qVfA54ibxS8vEuCM",
  authDomain: "messenger-clone-92ad9.firebaseapp.com",
  databaseURL: "https://messenger-clone-92ad9.firebaseio.com",
  projectId: "messenger-clone-92ad9",
  storageBucket: "messenger-clone-92ad9.appspot.com",
  messagingSenderId: "813354794490",
  appId: "1:813354794490:web:ff696d326dfaecdef2f843",
  measurementId: "G-XRYF7SVT9S"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  export default db;