// DOM Selection
// document.getElementById() -> element
const judul = document.getElementById("judul");

judul.style.color = "red";
judul.style.backgroundColor = "#accc";
judul.innerHTML = "Hafiz gantenk";

// document.getElementsByTagName() -> HTMLCollection
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "#accc";
}

const h1 = document.getElementsByTagName("h1")[0];

h1.style.fontSize = "50px";

// document.getElementByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName("p1");

p1[0].innerHTML = "Ini diubah dari javascript";
