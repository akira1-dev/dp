const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener("click", () => {
    const userUsernameInput = document.getElementById('user-username-input').value.trim();
    const userPasswordInput = document.getElementById('user-input-password').value.trim();
    const loginAlert = document.getElementById('login-alert');
    
    if (userUsernameInput === "test" && userPasswordInput === "1234") {
        loginAlert.innerText = "Successfully Login!";
        loginAlert.style.color = "green";
        
        loginBtn.disabled = true;
        loginBtn.style.backgroundColor = "silver";
        loginBtn.innerText = "Wait...";
        
        setTimeout(() => {
            location.href = "home.html";
        }, 3000);
    }
    else {
        loginAlert.innerText = "Valid Input.";
        loginAlert.style.color = "red";
    }
    
});
