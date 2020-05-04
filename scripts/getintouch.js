/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

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

/* eslint-disable no-param-reassign */
function emailVerify(event) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (event.target === undefined) {
    if (re.test(event)) {
      return true;
    }
    return false;
  }

  const email = event.target.value;
  if (re.test(email)) {
    event.target.style.borderColor = 'Green';
    return true;
  }
  event.target.style.borderColor = 'Red';
  return false;
}

function nameVerify(event) {
  if (event.target === undefined) {
    if (event.length > 0) {
      return true;
    }
    return false;
  }

  const name = event.target.value;
  if (name.length > 0) {
    event.target.style.borderColor = 'Green';
    return true;
  }
  event.target.style.borderColor = 'Red';
  return false;
}

function messageVerify(event) {
  if (event.target === undefined) {
    if (event.length > 0) {
      return true;
    }

    return false;
  }

  const message = event.target.value;
  if (message.length > 0) {
    event.target.style.borderColor = 'Green';
    return true;
  }
  event.target.style.borderColor = 'Red';
  return false;
}

function activateBtn() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (emailVerify(email) && nameVerify(name) && messageVerify(message)) {
    document.getElementById('submit').disabled = false;
  } else {
    document.getElementById('submit').disabled = true;
  }
}
