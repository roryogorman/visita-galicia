function sendMail(contactForm) {
    emailjs.send("gmail", "Galicia", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "travel_enquiry": contactForm.travelquery.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
