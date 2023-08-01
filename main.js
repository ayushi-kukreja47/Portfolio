
const mobile_nav=document.querySelector(".mobile-navbar-btn");
function classToggle() {
  const navs=document.querySelectorAll('.header');
  navs.forEach(nav =>nav.classList.toggle('active'));
}
mobile_nav.addEventListener('click',classToggle);





var typed=new Typed(".text",{
  strings:["Frontend Developer","Backend Developer","Web Developer"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});



// FOR BACKEND WORK





const firebaseConfig = {
  apiKey: "AIzaSyDDaciUvHsz4n7uJBnGLvQqCpZm7HkSMVk",
  authDomain: "portfolio-form-d9963.firebaseapp.com",
  databaseURL: "https://portfolio-form-d9963-default-rtdb.firebaseio.com",
  projectId: "portfolio-form-d9963",
  storageBucket: "portfolio-form-d9963.appspot.com",
  messagingSenderId: "495799257885",
  appId: "1:495799257885:web:8d29e30ec5bfb68ee72ff4",
  measurementId: "G-K3H876EXHX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const contactDB = firebase.database().ref('contact');

// Function to send the captured data to Firebase
function sendCapturedData(name, email, phone, msg) {
  contactDB.push().set({
    name: name,
    email: email,
    phone: phone,
    msg: msg
  });
}







function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const roll = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const imageData = document.getElementById('msg').value;


  sendCapturedData(name, roll, phone, imageData);

  alert('Form submitted successfully!');

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('msg').value = '';
}