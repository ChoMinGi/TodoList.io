const images = ["01.jpg", "02.jpg", "03.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const date = new Date();
const bgImage = document.createElement("img");

if (date.getHours() < 12) {
  bgImage.src = `img/day/${chosenImage}`;
} else {
  bgImage.src = `img/night/${chosenImage}`;
}

document.body.appendChild(bgImage);
