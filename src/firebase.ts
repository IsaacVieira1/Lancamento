// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAh0vYrIHy3kzEfyYJNgajytj_6PNmRtXQ",
  authDomain: "lancamento-rafa.firebaseapp.com",
  projectId: "lancamento-rafa",
  storageBucket: "lancamento-rafa.firebasestorage.app",
  messagingSenderId: "225918074335",
  appId: "1:225918074335:web:4f8a2374bc856b9456586a",
  measurementId: "G-5TYQ98W0E2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const logout = async () => {
  await signOut(auth);
};

export { auth };
