import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAuth } from "firebase/auth";
import { getStorage } from "@firebase/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence} from 'firebase/auth/react-native';


const firebaseConfig = {
  apiKey: 'AIzaSyD4876lYnwEow9GJwHckL_LYJTMcmhimpU',
  authDomain: 'curso-dev-2e4db.firebaseapp.com',
  databaseURL: 'https://curso-dev-2e4db-default-rtdb.firebaseio.com',
  projectId: 'curso-dev-2e4db',
  storageBucket: 'curso-dev-2e4db.appspot.com',
  messagingSenderId: '741981105417',
  appId: '1:741981105417:web:3102d3bdb100edabcbf7d8'
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGIN_SEND_ID,
//   appId: process.env.REACT_APP_ID
// };


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})
export const storage = getStorage(app);
export const secondaryApp = initializeApp(firebaseConfig)
