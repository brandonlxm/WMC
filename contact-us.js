const firebaseConfig = {
  apiKey: "AIzaSyApS2jsMnIIFwjWky2vx0j001p72nvQv-U",
  authDomain: "woofmeowcenter-3ec1a.firebaseapp.com",
  projectId: "woofmeowcenter-3ec1a",
  databaseURL: "https://woofmeowcenter-3ec1a-default-rtdb.firebaseio.com/",
  storageBucket: "woofmeowcenter-3ec1a.appspot.com",
  messagingSenderId: "49546601461",
  appId: "1:49546601461:web:d579ee1f7201ddb9bef6bc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase database
const database = firebase.database();

// Reference to the 'contacts' node in the database
const contactsRef = database.ref('contacts');

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Push the form data to the 'contacts' node in the database
  contactsRef.push({
    name: name,
    email: email,
    message: message
  });

  // Clear the form after submission
  document.getElementById('contactForm').reset();

  alert('Form submitted successfully!');
});