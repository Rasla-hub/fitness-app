document.getElementById("btn").addEventListener("click", function(event) {
    // Prevent form submission for validation
    event.preventDefault();

    // Get form elements
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const pswd1 = document.getElementById("pswd1");
    const pswd2 = document.getElementById("pswd2");

    // Check if all fields are filled
    if (name.value == "" || email.value == "" || pswd1.value == "" || pswd2.value == "") {
        alert("Please fill in all the fields.");
        return;
    }

    // Check if email is valid
    if (!validateEmail(email.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check if password and confirm password match
    if (pswd1.value !== pswd2.value) {
        alert("Passwords do not match.");
        return;
    }

    
    alert("registration successfull");
    
    document.querySelector('form[name="myform2"]').submit();
    
});


function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
