import {Injectable} from '@angular/core';


import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, connectAuthEmulator, } from "firebase/auth";
import {initializeApp} from "firebase/app";
import { Router} from "@angular/router";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyAdqfFKqoGt-WAwRAqxaeIz60o_-tmVu1Q",
  authDomain: "fir-auth-93a4f.firebaseapp.com",
  databaseURL: "https://fir-auth-93a4f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-auth-93a4f",
  storageBucket: "fir-auth-93a4f.appspot.com",
  messagingSenderId: "581614269949",
  appId: "1:581614269949:web:18e34ca6e21f1b4da6d594"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

connectAuthEmulator(auth, "http://localhost:9099")

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) {
  }

  login(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Успешный вход")
        this.route.navigate(['book'])
      })
      .catch((error) => {
        console.log(error)
      });
  }

  signUp(email: string, password: string, name: string | undefined) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Успешная регистрация")
        this.route.navigate(['auth'])
      })
      .catch((error) => {
        console.log(error)
      });
  }

  googleSign() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        const user = result.user;
      }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }
}
