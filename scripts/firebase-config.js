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

const storedToken = window.localStorage.getItem('fcm-token');

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const messaging = firebase.messaging();

// Firebase firestore database
const db = firebase.firestore();

// db.collection('user-data').add({
// 	"name": "Nikhil",
// 	"email": "nikhilsingh498@gmail.com",
// 	"message": "Hi there"
// })
// 	.then(res => {
// 		console.log(res);
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	})

// Callback fired if Instance ID token is updated.
messaging.onTokenRefresh(() => {
  messaging.getToken()
    .then((refreshedToken) => {
      // console.log('onTokenRefresh getToken Token refreshed.');
      // console.log('onTokenRefresh getToken', refreshedToken);
    })
    .catch((err) => {
      // console.log('onTokenRefresh getToken Unable to retrieve refreshed token ', err);
    });
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../sw.js')
    .then((registration) => {
      // Registration was successful
      // console.log('ServiceWorker registration successful');
      messaging.useServiceWorker(registration);
      messaging.requestPermission()
        .then(() => {
          messaging.getToken();
        // console.log('requestPermission Notification permission granted.');
        })
        .then((token) => {
          // console.log('requestPermission: ', token); // Display user token
        })
        .catch((err) => { // Happen if user deney permission
          // console.log('requestPermission: Unable to get permission to notify.', err);
        });

      // Get Instance ID token. Initially this makes a network call, once retrieved
      // subsequent calls to getToken will return from cache.
      messaging.getToken()
        .then((currentToken) => {
          if (currentToken) {
            // console.log('getToken', currentToken);
            window.localStorage.setItem('fcm-token', currentToken);
            if (currentToken != storedToken) {
              db.collection('fcm-tokens').add({
                token: currentToken,
              })
                .then((res) => {
                  // console.log(res);
                })
                .catch((err) => {
                  // console.log(err);
                });
            }
          } else {
            // Show permission request.
            // console.log('getToken: No Instance ID token available.');
          }
        })
        .catch((err) => {
          // console.log('getToken: An error occurred while retrieving token. ', err);
        });
    }, (err) => {
      // Registration failed
      // console.log('ServiceWorker registration failed: ', err);
    });
} else {
  // onsole.log('Service worker not supported');
}
