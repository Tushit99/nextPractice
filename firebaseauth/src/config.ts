import { initializeApp } from "firebase/app";  
import {getAuth} from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyAw5BLiJS3FYqzd0MfshHy6DSXZT_vWAIw",
  authDomain: "myfirebase-58496.firebaseapp.com",
  projectId: "myfirebase-58496",
  storageBucket: "myfirebase-58496.appspot.com",
  messagingSenderId: "734164481381",
  appId: "1:734164481381:web:64ec4e8c4a493a2a121d8c",
  measurementId: "G-LQM082V648"
};
 
const app = initializeApp(firebaseConfig); 
const auth = getAuth(); 

export {app, auth}

