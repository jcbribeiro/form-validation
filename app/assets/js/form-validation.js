document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to see error messages
    
    let isValid = true; // Flag to track overall form validity

    // Name validation
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (!name) {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(name)) {
        nameError.textContent = 'Only letters and white space allowed';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    if (!email) {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // If the form is valid, it could proceed for actual submission here.
    if (isValid) {
        console.log('Form is valid. Implement submission logic here.');
    }
});
