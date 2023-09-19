import { initializeApp } from "firebase/app";
import * as admin from 'firebase-admin';
import { getAuth } from "firebase/auth";
import { readFileSync } from 'fs';
import {resolve} from 'path';
import { firebaseConfig } from "../config/firebase.config";

const ADMIN_FIRE_CONFIG = readFileSync(resolve('./src/config/firebase-admin.config.json'), 'utf-8');

// Initialize Firebase
const app = initializeApp(firebaseConfig, 'client');
const adminApp = admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(ADMIN_FIRE_CONFIG))
},
'admin');

// Initialize Firebase Authentication and get a reference to the service
export const fireAuth = getAuth(app);
// Initialize Firebase Admin authentication reference
export const adminFireAuth = adminApp.auth();
