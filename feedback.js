(function() {
    emailjs.init("Vuy0WEJIciPHYE8Lf"); //emailJS User ID
})();

function sendEmail(event) {
    event.preventDefault();

    // Show loading overlay
    document.getElementById('loadingOverlay').style.display = 'block';

    emailjs.sendForm('service_wbj264w', 'template_histflo', '#feedbackForm')
        .then(function(response) {
            document.getElementById('loadingOverlay').style.display = 'none';

            // Set a timeout to show the alert after the loading screen is hidden
            setTimeout(() => {
                alert('Thank you for your feedback! Have a great day!', response.status, response.text);
                window.location.href = "index.html"; // Redirects to index.html
            }, 250); // Adjust the timeout as needed (500 ms)
            
        }, function(error) {
            alert('An error occured. Your feedback did not send. Please try again.', error);
            document.getElementById('loadingOverlay').style.display = 'none';
        });
}
