const firebaseConfig = {
  apiKey: "AIzaSyDQGBWhK50GdAtGrR63HRsLSCbIHSEgO3c",
  authDomain: "project-work-65ea2.firebaseapp.com",
  databaseURL: "https://project-work-65ea2-default-rtdb.firebaseio.com",
  projectId: "project-work-65ea2",
  storageBucket: "project-work-65ea2.appspot.com",
  messagingSenderId: "121587205083",
  appId: "1:121587205083:web:64f9b12b67ab9e85bc1dfe"
};
firebase.initializeApp(firebaseConfig);

function addUser() {
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
     purpose: "Adding User" 
  });
}