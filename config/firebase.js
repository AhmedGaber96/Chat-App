import { initializeApp } from "firebase/app";
import Constants from 'expo-constants'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId:Constants.manifest.extra.projectId,
  storageBucket:Constants.manifest.extra.storageBucket,
  messagingSenderId:Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
  databaseURL: Constants.manifest.extra.databaseURL,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();

