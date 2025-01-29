document.getElementById("registerBtn").addEventListener("click", function(event) {
    // Prevent form submission for validation
    event.preventDefault();

    // Get form elements
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    // Check if all fields are filled
    if (name.value == "" || email.value == "" || password.value == "" || confirmPassword.value == "") {
        alert("Please fill in all the fields.");
        return;
    }

    // Check if email is valid
    if (!validateEmail(email.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check if password and confirm password match
    if (password.value !='' confirmPassword.value) {
        alert("Passwords do not match.");
        return;
    }

    
    alert("registration successfull");
    
    document.querySelector('form').submit();
    
    
});


function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
