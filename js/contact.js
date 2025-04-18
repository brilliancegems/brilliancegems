// contact form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Show thank you message
      messageBox.textContent = "Thank you for getting in touch! We’ll get back to you soon.";
      messageBox.style.display = "block";

      // Reset form fields
      form.reset();
    });
  }
});
