const profilePicture = document.getElementById('profile-picture');
const usernameDisplay = document.getElementById('username-display');

const username = localStorage.getItem('username');
const profilePictureUrl = localStorage.getItem('profilePicture');

if (username) {
  usernameDisplay.textContent = username;
}

if (profilePictureUrl) {
  profilePicture.src = profilePictureUrl;
}
