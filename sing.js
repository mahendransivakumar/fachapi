document.getElementById("form");
document.addEventListener("submit",function(event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    let valid = true;
    if (!nameRegex.test(username)) {
        usernameError.textContent = "Please enter a valid username.";
        valid = false;
    }
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }
    if (password.trim() === "") {
        passwordError.textContent = "Please enter a password.";
        valid = false;
    }
    if (valid) {
        localStorage.setItem("useremail",email);
        localStorage.setItem("password",password);
        window.alert(
            "Singup successfully!",
        );
        window.location.href = "./login.html";
    }
})