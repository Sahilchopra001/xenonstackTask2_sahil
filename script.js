function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "demo" && password === "demo") {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Login failed. Invalid credentials.");
    }
}

function signup() {
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    alert("Sign Up successful!");
}
