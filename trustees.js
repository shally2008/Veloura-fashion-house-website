
const trustees = ["Mrs. Linda Okocha – CEO", "Mr. Fred Arinze – Creative Director", "Ms. Ijeoma Obasi – Marketing Lead"];
const ul = document.getElementById("trustees");
trustees.forEach(name => {
  const li = document.createElement("li");
  li.textContent = name;
  ul.appendChild(li);
});
