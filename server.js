const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "login" folder
app.use(express.static(path.join(__dirname, 'login')));

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Example validation logic
  if (username === 'admin' && password === 'password') {
    // Redirect to main page upon successful login
    res.redirect('/interstellar');
  } else {
    // Handle invalid credentials
    res.send('Invalid username or password');
  }
});

// Main page route
app.get('/main.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'login', 'index.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

