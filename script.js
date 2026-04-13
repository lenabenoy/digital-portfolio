// LOGIN VALIDATION
function loginValidate() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        window.location.href = "portfolio.html";
        return false;
    } else {
        document.getElementById("error").innerText = "Invalid Username or Password";
        return false;
    }
}

// FORM VALIDATION
function formValidate() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || phone === "" || message === "") {
        document.getElementById("formError").innerText = "All fields are required!";
        return false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("formError").innerText = "Invalid Email!";
        return false;
    }

    if (phone.length != 10 || isNaN(phone)) {
        document.getElementById("formError").innerText = "Invalid Phone Number!";
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}