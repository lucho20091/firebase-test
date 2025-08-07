import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkF_piyoR1QvA-TaCJYSrEmmoSszAcayk",
  authDomain: "todo-app-e8636.firebaseapp.com",
  projectId: "todo-app-e8636",
  storageBucket: "todo-app-e8636.firebasestorage.app",
  messagingSenderId: "927616063757",
  appId: "1:927616063757:web:d4dc5ceb96671be500b844",
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
