
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateForm()) {

        submitForm();
    }
});

function validateForm() {

    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var Fname = document.getElementById('Username').value;

    if (!Fname || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return false;
    }


    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}

function submitForm() {

    console.log('Form submitted successfully!');
    window.location.href = "index.html";

}

