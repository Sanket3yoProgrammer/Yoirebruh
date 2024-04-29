const profilePicture = document.getElementById('profile-picture');
const usernameDisplay = document.getElementById('username-display');

const username = localStorage.getItem('username');
const profilePictureUrl = localStorage.getItem('profilePicture');

profilePicture.src = profilePictureUrl;
usernameDisplay.textContent = username;
