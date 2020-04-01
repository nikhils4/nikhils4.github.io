/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const firebaseConfig = {
  apiKey: 'AIzaSyD-WhhW65gYcsrP_cxrqiyC-OP-I0jD6OQ',
  authDomain: 'portfolio-d9705.firebaseapp.com',
  databaseURL: 'https://portfolio-d9705.firebaseio.com',
  projectId: 'portfolio-d9705',
  storageBucket: 'portfolio-d9705.appspot.com',
  messagingSenderId: '992666464027',
  appId: '1:992666464027:web:7ef67ea44a6a47b7eeedbe',
  measurementId: 'G-SJ8Y20VXKY',
};

firebase.initializeApp(firebaseConfig);
// Firebase firestore database
const db = firebase.firestore();

document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const data = {
    name,
    email,
    message,
  };
  document.getElementById('submit').disabled = true;
  document.getElementById('submit').innerHTML = 'Sending...';
  db.collection('user-data').add(data)
    .then((res) => {
      document.getElementById('submit').disabled = false;
      document.getElementById('form-border').style.borderColor = '#4BB543';
      document.getElementById('submit').style.backgroundColor = '#4BB543';
      document.getElementById('submit').innerHTML = 'Message sent successfully';
    })
    .catch((err) => {
      document.getElementById('submit').disabled = false;
      document.getElementById('form-border').style.borderColor = '#FF0000';
      document.getElementById('submit').style.backgroundColor = '#FF0000';
      document.getElementById('submit').innerHTML = 'There was some error';
    });
});
