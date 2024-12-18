import { config } from "dotenv";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

config();

const firebaseConfig = {
  apiKey: process.env.APP_APP_KEY,
  authDomain: process.env.APP_AUTH_DOMAIN,
  projectId: process.env.APP_PROJECT_ID,
  storageBucket: process.env.APP_STORAGE_BUCKET,
  messagingSenderId: process.env.APP_MESSAGING_SEND_ID,
  appId: process.env.APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
