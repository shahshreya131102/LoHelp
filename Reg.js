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


const firstname = document.getElementById('Fname');
const lastName = document.getElementById('Lname');
const contactNumber = document.getElementById('Number');


// Registration-Connectivity
const addRegister = document.getElementById('register');
if (addRegister) {
  addRegister.addEventListener('click', (event) => {
    event.preventDefault();
    const emailId = document.getElementById('emailId').value;
    const password = document.getElementById('passWord').value;

    createUserWithEmailAndPassword(auth, emailId, password)
      .then(() => {
        alert("User Registered Successfully !!!");
      })
      .catch((error) => {
        alert("Error Message" + error.message)
      });

  })
}

// login coonectivity
const addLogin = document.getElementById('login');
if (addLogin) {
  addLogin.addEventListener('click', (event) => {
    event.preventDefault()

    const loginEmail = document.getElementById('emailId').value;
    const loginPass = document.getElementById('passWord').value;

    signInWithEmailAndPassword(auth, loginEmail, loginPass)
      .then(() => {
        alert("Login sucessful !");
        window.location.assign('index.html');
      })
      .catch((error) => {
        alert(error.message);
      })
  })
}

// // Get a reference to the database service
// // var database = firebase.database();


// function insertContact() {
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const message = document.getElementById("message").value;
//   set(ref(db, "Name/" + name), {
//     name: name.value,
//     email: email.value,
//     message: message.value
//   })
//     .then(() => {
//       alert('Data Store Successfully');
//     })
//     .catch((error) => {
//       alert("Unsuccessful" + error);
//     });
//   document.getElementById("name").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("message").value = "";
// }

// const btnadd = document.getElementById("btnadd");
// btnadd.addEventListener("click", insertContact);
