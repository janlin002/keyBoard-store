import firebase from 'firebase';
import 'firebase/auth';

const Config = {
  apiKey: "AIzaSyAlBV3xbE8GWfbdmllulrcl4ETCkpn2eWI",
  authDomain: "keyboard-react.firebaseapp.com",
  databaseURL: "https://keyboard-react-default-rtdb.firebaseio.com",
  projectId: "keyboard-react",
  storageBucket: "keyboard-react.appspot.com",
  messagingSenderId: "132189038212",
  appId: "1:132189038212:web:c2464404fd6da07de104d1",
  measurementId: "G-SR86PR81FH"
  };
let app = firebase.initializeApp(Config);
export default app;

// const app = firebase.initializeApp({
//   apiKey: 'AIzaSyAlBV3xbE8GWfbdmllulrcl4ETCkpn2eWI',
//   authDomain: 'keyboard-react.firebaseapp.com',
//   projectId: 'keyboard-react',
//   storageBucket: 'keyboard-react.appspot.com',
//   messagingSenderId: '132189038212',
//   appId: '1:132189038212:web:c2464404fd6da07de104d1',
//   measurementId: 'G-SR86PR81FH',
// });

// export const auth = app.auth();
// console.log(auth, 'auth');
// export default auth;
