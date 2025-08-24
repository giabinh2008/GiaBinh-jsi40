 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { GoogleAuthProvider,getAuth,signInWithPopup } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
 

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBVjp7xLfkkhJ80kxzpMaPd7hJtkMCyH9E",
    authDomain: "login-baikiemtra3.firebaseapp.com",
    projectId: "login-baikiemtra3",
    storageBucket: "login-baikiemtra3.firebasestorage.app",
    messagingSenderId: "638544278028",
    appId: "1:638544278028:web:72c4a15ef114c3a0e13429"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();

//   Gọi nút bằng Dom 
const googleloginButton = document.getElementsByClassName("google-btn")

// Dùng vòng lặp do có 2 class name google-btn
for (let btn of googleloginButton) {
    btn.addEventListener("click" , ()=>{
    signInWithPopup(auth, provider)
  .then((result) => {  
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    alert("Chào" + user.displayName)
    window.location.href="./main.html"
  }).catch((error) => {    
    const errorCode = error.code;
    const errorMessage = error.message;  
    alert("ĐĂNG NHẬP THẤT BẠI")  
  });
    })
}











  // Hàm chuyển form
  function switchForm(formId) {
    document.querySelectorAll('.form').forEach(form => {
        form.classList.remove('active');
    });
    document.getElementById(formId).classList.add('active');
}

// Đảm bảo HTML có thể gọi được switchForm()
window.switchForm = switchForm;