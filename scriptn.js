const profilePicture = document.getElementById('profile-picture');
const usernameDisplay = document.getElementById('username-display');

// Check if the user has provided a username and password before
if (localStorage.getItem('username') && localStorage.getItem('password')) {
  // Retrieve the user's profile picture and username
  const profilePictureUrl = localStorage.getItem('profilePicture');
  const username = localStorage.getItem('username');

  // Display the user's profile picture and username
  profilePicture.src = profilePictureUrl;
  usernameDisplay.textContent = username;
}
