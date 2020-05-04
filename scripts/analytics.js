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