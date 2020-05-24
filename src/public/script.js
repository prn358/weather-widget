const buttons = document.querySelectorAll("button");

function getdata(index) {
  fetch(`/api/${index}/`)
    .then(e => e.json())
    .then(data => {
      const img = document.querySelector("img");
      const city = document.querySelector("h3");
      const cityTemp = document.querySelector("p");

      img.crc = data.image;
      city.innerHTML = data.city;
      cityTemp.innerHTML = data.temp;
    });
}

console.log(buttons);

buttons[0].addEventListener("click", () => {
  console.log("hello");
  getdata(0);
});
buttons[1].addEventListener("click", () => {
  console.log("hello");
  getdata(1);
});
buttons[2].addEventListener("click", () => {
  console.log("hello");
  getdata(2);
});
