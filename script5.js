document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("appointmentForm");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      
      window.location.href = "confirmation.html"; 
      form.reset();
    });
  });