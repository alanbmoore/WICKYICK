import admin from "firebase-admin";
import { initializeApp, AppOptions, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const firebaseConfig: AppOptions = {
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
};

// Initialize Firebase
const app = !admin.apps.length ? initializeApp(firebaseConfig) : admin.app();

export const db = getFirestore(app);

export const auth = getAuth();
