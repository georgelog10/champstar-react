import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBb4j5DviVcGmxjTM2LkT9k_DLkXYbfhrk",
    authDomain: "champstar-firebase.firebaseapp.com",
    projectId: "champstar-firebase",
    storageBucket: "champstar-firebase.appspot.com",
    messagingSenderId: "602291131826",
    appId: "1:602291131826:web:0a3e1a6dab042df1ee80ab"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
const auth = getAuth(app);
const db = getFirestore(app)
provider.setCustomParameters({   
    prompt : "select_account"
});
export { auth, db, fbProvider };
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);