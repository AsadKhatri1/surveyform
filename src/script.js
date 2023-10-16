// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    addDoc,
    collection,
    getDocs,
    doc,
    deleteDoc,
    onSnapshot,
    query,
    where,
    orderBy,
    serverTimestamp,
    setDoc,
    Timestamp,
} from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { async } from "@firebase/util";


// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBL0WTll55vu2CR547pPRzBheUhBmVwij0",
    authDomain: "survey-form-7c356.firebaseapp.com",
    projectId: "survey-form-7c356",
    storageBucket: "survey-form-7c356.appspot.com",
    messagingSenderId: "62408808823",
    appId: "1:62408808823:web:9bd6bb86b8639ecad8e972",
    measurementId: "G-RGMXLCZXTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app)


// data from form
let form = document.querySelector('#form')
form.addEventListener('submit', async(e) => {
    e.preventDefault()

    let name = e.target.name.value
    let email = e.target.email.value
    let age = e.target.age.value

    var select = document.getElementById("role");
    var value = select.value;

 

    var recommed = document.getElementsByName('recommed');
var recommed_value;
for(var i = 0; i < recommed.length; i++){
    if(recommed[i].checked){
        recommed_value = recommed[i].value;
    }
}


    var language= document.getElementsByName('inp');
var language_value=[]
for(var i = 0; i < language.length; i++){
    if(language[i].checked){
       language_value.push(language[i].value);
    }
}
    
let comment=e.target.comment.value

const data={
    name,
    age,
    email,
    profession:  value,
    recommendation: recommed_value,
    preferredLanguage: language_value,
    comment
}


// Add a new document with a generated id
const newCityRef = doc(collection(db, "userData"));

// later...
await setDoc(newCityRef, data);


    // let para=document.querySelector('.greet')
    // para.classList.remove('hidden')
})
