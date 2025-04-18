// Subscription Form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscribeForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const firstName = this.querySelector('input[placeholder="First Name"]').value.trim();
      const lastName = this.querySelector('input[placeholder="Last Name"]').value.trim();
      const email = this.querySelector('input[placeholder="Email Address"]').value.trim();

      if (firstName && lastName && email) {
        document.getElementById("thankYouMsg").style.display = "block";
        this.reset();
      } else {
        alert("Please fill in all the fields.");
      }
    });
  }
});
