

document.getElementById("btn").addEventListener("click", function(event) {

    event.preventDefault();

    
    const email = document.querySelector('input[type="email"]');
    const password = document.querySelector('input[type="password"]')

    if (!validateEmail(email.value)) {
        alert("Please enter a valid email address.");
        return;
    }


    if (password.value == "") {
        alert("Please enter a password.");
        return;
    }

if(username!='' || password!=''){
    
    alert("Form submitted successfully!");

     document.querySelector('form').submit();

}


);


function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
