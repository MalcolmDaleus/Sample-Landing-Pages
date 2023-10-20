"use strict;";

// ****** DECLARATIONS ******

// References to elements in the document
const form = document.getElementById("sign-up-form");
const passwordField = document.getElementById("pwd");
const passwordRequirements = document.getElementById("password-requirements");

// Compact list of valid password characters to be compared to later
const validPasswordChars =
	/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#\$%^&*()/?~]).{8,32}$/;

// Event listeners
passwordField.addEventListener("click", showRequirements);
form.addEventListener("submit", submitForm);

// ****** FUNCTIONS ******
// All functions are attached to an event listener or an HTML button and react to user updates

// Shows a list of requirements for the user's password and updates certain CSS qualities of the password field
function showRequirements() {
	passwordRequirements.style.display = "block";
	validPasswordChars.test(passwordField.value)
		? (passwordField.style.border = "2px solid #009900")
		: (passwordField.style.border = "2px solid #ff0000");
}

// Checks the password as it is inputted by the user and updates CSS for the field border and requirements section based on its validity
function checkPasswordRequirements(password) {
	if (validPasswordChars.test(password)) {
		passwordRequirements.style.display = "none";
		passwordField.style.border = "2px solid #009900";
		document.activeElement.style.outline = "none";
	} else {
		passwordRequirements.style.display = "block";
		passwordField.style.border = "2px solid #ff0000";
	}
}

// Used to check and submit the information from the form and store the data in an object while reseting the form
function submitForm(event) {
	// Prevents page reload
	event.preventDefault();

	// Declarations for form info
	let firstName = document.getElementById("first-name").value;
	let lastName = document.getElementById("last-name").value;
	let email = document.getElementById("email").value;
	let userPassword = passwordField.value;

	// Checks the validity of the password and shows an "incorrect" animation if it is not valid. Otherwise the data is stored and the form and all CSS is reset
	if (!validPasswordChars.test(userPassword)) {
		userPassword = "";
		passwordField.style.animation = "incorrectPasswordShake 0.2s 1";
		setTimeout(() => {
			passwordField.style.animation = "";
		}, 250);
	} else {
		// Creates an object to store the form data
		const formData = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: userPassword,
		};

		document.getElementById("sign-up-form").reset();
		passwordRequirements.style.display = "none";
		passwordField.style.border = "3px solid #ccc";
	}
}
