(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "_H-minMHj_ldmmjKS", 
    });
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Simple validation
        const form = this;
        let isValid = true;

        // Clear previous help blocks
        document.querySelectorAll('.help-block').forEach(block => block.textContent = '');

        // Validate each field
        Array.from(form.elements).forEach(element => {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (!element.checkValidity()) {
                    isValid = false;
                    const message = element.dataset.validationRequiredMessage || 'This field is required.';
                    element.nextElementSibling.textContent = message;
                }
            }
        });

        if (isValid) {
            // Send the form if all fields are valid
            emailjs.sendForm('service_24d2v6c', 'template_obz7fn8', form) 
                .then(() => {
                    console.log('SUCCESS!');
                    form.reset();
                    document.getElementById('success').textContent = 'Your message has been sent successfully!'; // Display success message
                }, (error) => {
                    console.log('FAILED...', error);
                });
        }
    });
}