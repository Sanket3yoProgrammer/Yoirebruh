const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const current = document.getElementById('current');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check if the username and password match the stored values
  if (username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
    // Redirect to the next page
    window.location.href = 'next-page.html';
  } else {
    // Display an error message
    alert('Invalid username or password');
  }
});
