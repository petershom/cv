// Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simple form validation (can be expanded)
    if (name && email && message) {
      // Simulate sending the message
      document.getElementById('confirmationMessage').textContent = 'Message sent! Thank you, ' + name + '.';
      
      // Clear form fields
      document.getElementById('contactForm').reset();
    } else {
      document.getElementById('confirmationMessage').textContent = 'Please fill out all fields.';
    }
  });  