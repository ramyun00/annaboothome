import './App.scss';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Title from './Title';


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXixL5GFDJli04OAIs3-bTYO3ghcXgOzw",
  authDomain: "annaboothome.firebaseapp.com",
  projectId: "annaboothome",
  storageBucket: "annaboothome.appspot.com",
  messagingSenderId: "1016584318334",
  appId: "1:1016584318334:web:c4c6078197acd07e11d72f",
  measurementId: "G-R1SXX7VQDX"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
  return (
    <div className="app">
      <Title title="Cloud Deployment Test"></Title>
    </div>
  );
}

export default App;
