
const events = [
  "Style Parade - Aug 15th",
  "Luxury Line Showcase - Sept 1st",
  "Customer Appreciation Gala - Oct 20th"
];
const list = document.getElementById("eventList");
events.forEach(event => {
  const li = document.createElement("li");
  li.textContent = event;
  list.appendChild(li);
});
