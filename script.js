// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const formElement = document.querySelector('#form');
const errorList = document.querySelector('.errors-list');
const errorBlock = document.querySelector('.errors');
const usernameIP = document.querySelector('#username');
const passwordIP = document.querySelector('#password');
const passwordConfirmationIP = document.querySelector('#password-confirmation');
const termsIP = document.querySelector('#terms');

formElement.addEventListener('submit', e => {
    const errors = [];
    clearErrors();
    const username = usernameIP.value;
    const password = passwordIP.value;
    const passwordConfirmation = passwordConfirmationIP.value;
    if (username.length < 6)
        errors.push('Username must be at least 6 characters long');
    if (password.length < 10 || passwordConfirmation.length < 10)
        errors.push('Password must be at least 10 characters long');
    if (password != passwordConfirmation) errors.push("Passwords didn't match");
    if (!termsIP.checked) errors.push('Please agree to the terms');
    //errorBlock.classList.toggle('show', errors.length > 0);
    if (errors.length > 0) {
        e.preventDefault();
        showErrors(errors);
    }
});

// TODO: Create an event listener for when the form is submitted and do the following inside of it.
//    TODO: Create an array to store all error messages and clear any old error messages
//    TODO: Define the following validation checks with appropriate error messages
//      1. Ensure the username is at least 6 characters long
//      2. Ensure the password is at least 10 characters long
//      3. Ensure the password and confirmation password match
//      4. Ensure the terms checkbox is checked
//    TODO: If there are any errors then prevent the form from submitting and show the error messages

// TODO: Define this function
function clearErrors() {
    // errors = [];
    errorBlock.classList.remove('show');
    while (errorList.children.length > 0) {
        errorList.removeChild(errorList.children[0]);
    }
    // Alternatively we can do the below
    //errorList.innerHTML = '';

    // Loop through all the children of the error-list element and remove them
    // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
    // I recommend using a while loop to accomplish this task
    // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
    // Also, make sure you remove the show class to the errors container
}

// TODO: Define this function
function showErrors(errorMessages) {
    if (errorMessages.length > 0) errorBlock.classList.add('show');
    errorMessages.forEach(error => {
        const errorEle = document.createElement('li');
        errorEle.innerText = error;
        errorList.appendChild(errorEle);
    });
}
