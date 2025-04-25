
    document.getElementById("contact-form").addEventListener("submit", function(event) {
      // Prevent form from submitting immediately
      event.preventDefault();
  
      // Get input values
      const name = document.querySelector('input[name="name"]').value.trim();
      const email = document.querySelector('input[name="email"]').value.trim();
      const message = document.querySelector('textarea[name="massage"]').value.trim(); // you wrote "massage" (check below)
  
      // Validate name
      if (name === "") {
        alert("Please enter your name.");
        return;
      }
  
      // Validate email format using regex
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      // Validate message
      if (message === "") {
        alert("Please enter your message.");
        return;
      }
  
      // If everything is valid, submit the form
      this.submit();
    });

  