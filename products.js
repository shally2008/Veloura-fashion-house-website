
const products = [
  { name: "Silk Evening Gown", price: "$150" },
  { name: "Men’s Traditional Agbada", price: "$120" },
  { name: "Ankara Jumpsuit", price: "$85" }
];
const section = document.getElementById("products");
products.forEach(item => {
  const div = document.createElement("div");
  div.innerHTML = `<h3>${item.name}</h3><p>${item.price}</p>`;
  section.appendChild(div);
});
