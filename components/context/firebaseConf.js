import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFiFiHXIxv3XRcmvRYbPs4Tic0v9NQdH8",
  authDomain: "test-project-1f9bd.firebaseapp.com",
  projectId: "test-project-1f9bd",
  storageBucket: "test-project-1f9bd.appspot.com",
  messagingSenderId: "684444717075",
  appId: "1:684444717075:web:42f540d7d8db1717b9efe6",
  measurementId: "G-1SPJV9QWWC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()

export { auth }