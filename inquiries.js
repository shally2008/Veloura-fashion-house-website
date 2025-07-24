
document.getElementById("appointmentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("response").textContent = "Thank you for reaching out. We'll contact you shortly!";
});
