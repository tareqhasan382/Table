// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
//const auth = getAuth(app);
//export default auth;
/*authentication task


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxWVYhTaGR9ZG_V77_N_OEA6kwS1lFEEQ",
  authDomain: "authentication-task-b555d.firebaseapp.com",
  projectId: "authentication-task-b555d",
  storageBucket: "authentication-task-b555d.appspot.com",
  messagingSenderId: "348390073933",
  appId: "1:348390073933:web:95b2e44cdd34b14d4b1e04"
};




REACT_APP_apiKey=AIzaSyAWcCP3CX_Nbyr4o0I2RNDaBLtRCVTDqc8
  REACT_APP_authDomain=job-task-auth-720e0.firebaseapp.com
  REACT_APP_projectId=job-task-auth-720e0
  REACT_APP_storageBucket=job-task-auth-720e0.appspot.com
  REACT_APP_messagingSenderId=433587216714
  REACT_APP_appId=1:433587216714:web:c3650a244f8ad42b9f61b3


  apiKey: "AIzaSyBxWVYhTaGR9ZG_V77_N_OEA6kwS1lFEEQ",
  authDomain: "authentication-task-b555d.firebaseapp.com",
  projectId: "authentication-task-b555d",
  storageBucket: "authentication-task-b555d.appspot.com",
  messagingSenderId: "348390073933",
  appId: "1:348390073933:web:95b2e44cdd34b14d4b1e04"

  
// Initialize Firebase
const app = initializeApp(firebaseConfig);


*/
