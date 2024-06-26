const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const profilePicture = document.getElementById('profile-picture').files[0];
  const password = document.getElementById('password').value;

  // Save the username, profile picture, and password in local storage
  localStorage.setItem('username', username);
  localStorage.setItem('profilePicture', URL.createObjectURL(profilePicture));
  localStorage.setItem('password', password);

  // Redirect to the dashboard page
  window.location.href = 'dashboard.html';
});
