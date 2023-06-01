import { useEffect, useState } from 'react';
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
  const [apiResponse, setApiResponse] = useState('');
  useEffect(() => {
    const call = fetch("https://annaboothome.ue.r.appspot.com/")
    .then(stream => stream.text())
    .then(result => setApiResponse(result));
  }, [])
  
  return (
    <div className="app">
      <Title title="Cloud Deployment Test"></Title>
      Version {process.env.REACT_APP_VERSION}
      <p>
        <ul>
          <li>Containerized UI one time lol</li>
          <li>Get response: {apiResponse}</li>
          <li>Enabled CORS</li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Streams_API#concepts_and_usage" target="_BLANK" rel="noreferrer">What is a readableStream?</a>
          </li>
          <li>I left some Compute Engine instances running by accident and it cost me $2.50 :(</li>
        </ul>
      </p>
    </div>
  );
}

export default App;
