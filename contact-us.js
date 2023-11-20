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
function submitForm(){
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;
detailsRef.push().set({
name: name,
email: email,
message: message,
});
}
.then(function () {
  // Display thank you message and hide the form
  document.getElementById("formContainer").style.display = "none";
  document.getElementById("thankYouMessage").style.display = "block";
})
.catch(function (error) {
  console.error("Error submitting form:", error);
});
}

function resetForm() {
// Reset the form and show the form container
document.getElementById("contactForm").reset();
document.getElementById("formContainer").style.display = "block";
document.getElementById("thankYouMessage").style.display = "none";
}