// Function to handle user signup
function signupUser (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve user input
    const username = document.getElementById('signupUsername').value;
    const fullName = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Create a user object
    const user = {
        username: username,
        fullName: fullName,
        email: email,
        password: password // Note: In a real application, never store passwords in plain text!
    };

    // Store user data in local storage
    localStorage.setItem('user', JSON.stringify(user));

    // Optionally, redirect to profile page after signup
    window.location.href = 'profile.html';
}

// Function to handle user login
function loginUser (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve input
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve user data from local storage
    const user = JSON.parse(localStorage.getItem('user'));

    // Check if user exists and credentials are correct
    if (user && user.email === email && user.password === password) {
        // Optionally, redirect to profile page after successful login
        window.location.href = 'profile.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

// Function to populate user profile
function populateProfile() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('displayUsername').textContent = user.username;
        document.getElementById('displayName').textContent = user.fullName;
        document.getElementById('displayEmail').textContent = user.email;
    } else {
        // Handle case where user is not logged in
        alert('No user logged in. Please log in to view your profile.');
        window.location.href = 'auth.html'; // Redirect to login/signup page
    }
}

// Call populateProfile when the profile page is loaded
if (window.location.pathname.endsWith('profile.html')) {
    populateProfile();
}