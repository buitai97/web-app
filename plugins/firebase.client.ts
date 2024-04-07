import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA92uF91EsZzbFJ5n97afp95qfHXlUwB0w",
  authDomain: "web-app-f3472.firebaseapp.com",
  projectId: "web-app-f3472",
  storageBucket: "web-app-f3472.appspot.com",
  messagingSenderId: "274826440978",
  appId: "1:274826440978:web:0c397900f87de4f54ac3cb",
};
export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyA92uF91EsZzbFJ5n97afp95qfHXlUwB0w",
    authDomain: "web-app-f3472.firebaseapp.com",
    projectId: "web-app-f3472",
    storageBucket: "web-app-f3472.appspot.com",
    messagingSenderId: "274826440978",
    appId: "1:274826440978:web:0c397900f87de4f54ac3cb",
    measurementId: "G-H56BVD84R9",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);
});
