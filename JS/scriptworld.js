//JS (Rain effect Dev) 1 june 2024 https://dev.to/j471n/colorful-rain-with-js-514j
const rainContainer = document.querySelector(".rain-container");

// background Colors for the raindrop
const background = [
  "linear-gradient(transparent, #d8f3d7)",
];

const amount = 100; // amount of raindops
let i = 0;

// Looping and creating the raindrop then adding to the rainContainer
while (i < amount) {
  //  Creating and Element
  const drop = document.createElement("i");

  //   CSS Properties for raindrop
  const raindropProperties = {
    width: Math.random() * 5 + "px",
    positionX: Math.floor(Math.random() * window.innerWidth) + "px",
    delay: Math.random() * -10 + "s",
    duration: Math.random() * 15 + "s",
    bg: background[Math.floor(Math.random() * background.length)],
    opacity: Math.random() + 0
  };

  //   Setting Styles for raindrop
  drop.style.width = raindropProperties.width;
  drop.style.left = raindropProperties.positionX;
  drop.style.animationDelay = raindropProperties.delay;
  drop.style.animationDuration = raindropProperties.duration;
  drop.style.background = raindropProperties.bg;
  drop.style.opacity = raindropProperties.opacity;

  //   Appending the raindrop in the raindrop container
  rainContainer.appendChild(drop);
  i++;
}