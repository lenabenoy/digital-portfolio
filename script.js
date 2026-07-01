// LOGIN VALIDATION
function loginValidate() {
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();

    // Just check if the user filled out the fields
    if (user !== "" && pass !== "") {
        // Optional: Store the guest's name to greet them on your portfolio page!
        localStorage.setItem("guestName", user);
        
        window.location.href = "portfolio.html";
        return false;
    } else {
        document.getElementById("error").innerText = "Please fill in both fields to enter as a Guest.";
        return false;
    }
}

// FORM VALIDATION (Kept exactly as you wrote it)
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
