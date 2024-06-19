document.getElementById('eventRegistrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        isValid = false;
        document.getElementById('nameError').textContent = 'Name can contain letters and spaces only.';
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Phone validation
    const phone = document.getElementById('phone').value;
    if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(phone)) {
        isValid = false;
        document.getElementById('phoneError').textContent = 'Phone number must be in the format (123) 456-7890.';
    } else {
        document.getElementById('phoneError').textContent = '';
    }

    // Event Date validation
    const eventDate = document.getElementById('eventDate').value;
    if (!/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/.test(eventDate)) {
        isValid = false;
        document.getElementById('eventDateError').textContent = 'Date must be in MM/DD/YYYY format.';
    } else {
        document.getElementById('eventDateError').textContent = '';
    }

    // Tickets validation
    const tickets = document.getElementById('tickets').value;
    if (tickets < 1 || tickets > 10) {
        isValid = false;
        document.getElementById('ticketsError').textContent = 'Number of tickets must be between 1 and 10.';
    } else {
        document.getElementById('ticketsError').textContent = '';
    }

    // Display success message if form is valid
    if (isValid) {
        document.getElementById('successMessage').textContent = 'Registration successful!';
    } else {
        document.getElementById('successMessage').textContent = '';
    }
});

