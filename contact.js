document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS Public Key

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.textContent = "Sending...";

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
      .then(() => {
        status.textContent = "Message sent successfully!";
        form.reset();
      }, (err) => {
        console.error(err);
        status.textContent = "Failed to send. Please try again.";
      });
  });
});
