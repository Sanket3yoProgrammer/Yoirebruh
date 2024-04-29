const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const username = usernameInput.value;
	const password = passwordInput.value;

	// Store the login credentials in local storage
	localStorage.setItem('username', username);
	localStorage.setItem('profilePicture', 'https://example.com/profile-picture.jpg'); // Replace with actual profile picture URL

	// Redirect to the next page
	window.location.href = 'next-page.html';
});
