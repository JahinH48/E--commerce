/* document.getElementById('btnLogin').addEventListener('click', function () {
	// get user email
	const emailField = document.getElementById('txtUserName');
	const userEmail = emailField.value;
	// get user password
	const passwordField = document.getElementById('txtPassword');
	const userPassword = passwordField.value;
	// check email and password
	if (userEmail == 'jahin' && userPassword == 'jisan') {
		// window.location.href = 'jisan.html';
		console.log('jisan click smile')
	}
	else {
		console.log('king')
	}
}); */

document.getElementById('login-submit').addEventListener('click', function () {
	// get user email
	const emailField = document.getElementById('user-email');
	const userEmail = emailField.value;
	// get user password
	const passwordField = document.getElementById('user-password');
	const userPassword = passwordField.value;
	// check email and password
	if (userEmail == 'jahin' && userPassword == 'jisan') {
		window.location.href = 'jisan.html';
	}
	else {
		alert('Try agin ')
	}
});
