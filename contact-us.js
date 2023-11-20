const firebaseConfig = {
  apiKey: "AIzaSyApS2jsMnIIFwjWky2vx0j001p72nvQv-U",
  authDomain: "woofmeowcenter-3ec1a.firebaseapp.com",
  projectId: "woofmeowcenter-3ec1a",
  databaseURL: "https://woofmeowcenter-3ec1a-default-rtdb.firebaseio.com/",
  storageBucket: "woofmeowcenter-3ec1a.appspot.com",
  messagingSenderId: "49546601461",
  appId: "1:49546601461:web:d579ee1f7201ddb9bef6bc"
};

const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child('userdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
var newPost = snapshot.val();
});
function send(){
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;
detailsRef.push().set({
name: name,
email: email,
message: message,
});
}
function submitForm() {
  // Get form values (you can use these values for further processing if needed)
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Clear the form after successful submission
  document.getElementById('contactForm').reset();

  // Show the thank you message
  document.getElementById('thankYouMessage').style.display = 'block';

  // Optionally, you can use a timeout to hide the thank you message after a certain time
  setTimeout(() => {
      document.getElementById('thankYouMessage').style.display = 'none';
  }, 5000); // 5000 milliseconds (5 seconds) in this example
}