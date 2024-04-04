// Initialize EmailJS with your public key
emailjs.init("RWvHn3Ui2ppUjdlHs");

// Add event listener to the form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Send the form using EmailJS
    emailjs.sendForm('service_4r4fn3u', 'template_gamf4d7', this)
        .then(function(response) {
            // Handle success
            console.log('Email sent successfully', response);
            alert('Your message has been sent successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            // Handle error
            console.error('Email sending error', error);
            alert('There was an error sending your message. Please try again later.');
        });
});
