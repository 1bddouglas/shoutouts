import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDEwsX9JqCb8ZB1zZS1caMI06_6xyc9A7Q",
  authDomain: "shoutouts-10418.firebaseapp.com",
  projectId: "shoutouts-10418",
  storageBucket: "shoutouts-10418.appspot.com",
  messagingSenderId: "305684843915",
  appId: "1:305684843915:web:d2441aadc5ae9a074ff38e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);
