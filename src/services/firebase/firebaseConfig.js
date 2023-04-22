import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBlACbpa5olsGCi2aPZRD9i75xJlsXQEcM",
  authDomain: "react-diego-bususcovich.firebaseapp.com",
  projectId: "react-diego-bususcovich",
  storageBucket: "react-diego-bususcovich.appspot.com",
  messagingSenderId: "760906967449",
  appId: "1:760906967449:web:f71faaaa6bf8329f6ccb08"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)