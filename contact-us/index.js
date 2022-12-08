(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('cFdVnXr7KWFK-FDG6');
})();


window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_rg7uacc', 'template_keczw05', this)
            .then(function () {
                console.log('SUCCESS!');
                alert("Your message is sent successfully.");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Your message is failed to send. Please try again.");
            }).then(function () {
                this.reset();
            })

    });
}