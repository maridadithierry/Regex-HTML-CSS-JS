document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    // Name validation: Letters and spaces only
    const name = document.getElementById('name').value.trim();
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
        document.getElementById('nameError').textContent = "Name can only contain letters and spaces.";
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Email validation: Valid email format
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email address.";
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Phone number validation: Format (123) 456-7890
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = "Phone number must be in the format (123) 456-7890.";
        document.getElementById('phoneError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('phoneError').style.display = 'none';
    }

    // Event date validation: Valid date in MM/DD/YYYY format
    const date = document.getElementById('date').value.trim();
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/;
    if (!dateRegex.test(date)) {
        document.getElementById('dateError').textContent = "Date must be in MM/DD/YYYY format.";
        document.getElementById('dateError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('dateError').style.display = 'none';
    }

    // Number of tickets validation: Between 1 and 10
    const tickets = document.getElementById('tickets').value.trim();
    if (tickets < 1 || tickets > 10) {
        document.getElementById('ticketsError').textContent = "Number of tickets must be between 1 and 10.";
        document.getElementById('ticketsError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('ticketsError').style.display = 'none';
    }

    // If form is valid, submit it
    if (valid) {
        alert("Registration successful!");
        // Form can be submitted to the server here using fetch or XMLHttpRequest
    }
});

