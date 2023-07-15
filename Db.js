import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
// firebase.initializeApp(config);


const firebaseConfig = {
    apiKey: "AIzaSyD6r4lj-pPz7w6aHCo_Q1n_WMFj7pVIc_E",
    authDomain: "lohelp-d65e9.firebaseapp.com",
    projectId: "lohelp-d65e9",
    storageBucket: "lohelp-d65e9.appspot.com",
    messagingSenderId: "285844673523",
    appId: "1:285844673523:web:04f24313279c088e137886",
    measurementId: "G-XCL40GM7TT"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

// Get a reference to the database service
// var database = firebase.database();


function insertContact() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    set(ref(db, "Name/" + name), {
        name: name,
        email: email,
        message: message
    })
        .then(() => {
            alert('Data Store Successfully');
        })
        .catch((error) => {
            alert("Unsuccessful" + error);
        });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

const btnadd = document.getElementById("btnadd");
btnadd.addEventListener("click", insertContact);