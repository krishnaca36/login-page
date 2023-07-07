document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Perform your login validation here
    // For demonstration purposes, let's assume the username is 'admin' and password is 'password'
    if (username === 'admin' && password === 'password') {
      alert('Login successful');
      // Redirect to another page
      window.location.href = 'welcome.html';
    } else {
      alert('Invalid username or password');
    }
  });
  