let slides = [
  "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/259620/pexels-photo-259620.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/355411/pexels-photo-355411.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];
// console.log(slides[0].src);

const body = document.querySelector("body");
body.style.backgroundColor = "pink";

const divBackButton = document.querySelector(".backButton");
const divForwardButton = document.querySelector(".forwardButton");
const divPicture = document.querySelector(".picture");
const divAutoBack = document.querySelector(".autoBack");
const divAutoForward = document.querySelector(".autoForward");
const stopButton = document.querySelector(".stopButton");
const backButton = document.createElement("button");
const forwardButton = document.createElement("button");
const autoForwardButton = document.createElement("button");
const autoBackButton = document.createElement("button");

divAutoBack.appendChild(autoBackButton);
autoBackButton.innerText = "Auto Back";
divAutoForward.appendChild(autoForwardButton);
autoForwardButton.innerText = "Auto Forward";
divForwardButton.appendChild(forwardButton);
forwardButton.innerText = "Forward";
divBackButton.appendChild(backButton);
backButton.innerText = "Back";
const img = document.createElement("img");
divPicture.appendChild(img);

let index = 0;
img.src = slides[index];
let autoInterval = null;

forwardButton.addEventListener("click", forwardBtn);
backButton.addEventListener("click", backBtn);

autoForwardButton.addEventListener("click", function () {
  if (autoInterval) {
    //true
    stopBtn();
  }
  autoInterval = setInterval(forwardBtn, 2000);
});

autoBackButton.addEventListener("click", function () {
  if (autoInterval) {
    stopBtn();
  }
  autoInterval = setInterval(backBtn, 2000);
});

stopButton.addEventListener("click", stopBtn);
function stopBtn() {
  clearInterval(autoInterval);
}

function forwardBtn() {
  index = index + 1;
  if (index > slides.length - 1) {
    index = 0;
  }
  img.src = slides[index]; // index[1] /
  console.log(index);
}
function backBtn() {
  index = index - 1;
  if (index < 0) {
    index = slides.length - 1;
  }
  img.src = slides[index];
  console.log(index);
}
backBtn();
forwardBtn();

// function randomSlide() {
//   //   const rand = slides[Math.floor(Math.random() * slides.length)];
//   //   console.log(rand);
//   slides.map((slide, id) => {});
// }

// let slides = [
//     "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     "https://images.pexels.com/photos/259620/pexels-photo-259620.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     "https://images.pexels.com/photos/355411/pexels-photo-355411.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
// ];
// // console.log(slides[0].src);

// const body = document.querySelector("body");
// body.style.backgroundColor = "pink";

// const divBackButton = document.querySelector(".backButton");
// const divForwardButton = document.querySelector(".forwardButton");
// const divPicture = document.querySelector(".picture");

// const img = document.createElement("img");
// divPicture.appendChild(img);
// let index = 0;
// // console.log(index)
// img.src = slides[index].src;

// const backButton = document.createElement("button");
// divBackButton.appendChild(backButton);
// backButton.innerText = "Back";
// backButton.addEventListener("click", () => {
//     if (index > 0) {
//         img.src = slides[index - 1].src;
//         index = index - 1;
//         console.log("ola");
//     } else if (index === 0) {
//         console.log("is 0");
//         img.src = slides[slides.length - 1].src;
//         index = slides.length - 1;
//     }
// });

// // divPicture.style.backgroundImage = "url('https://images.pexels.com/photos/259620/pexels-photo-259620.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')";

// // divPicture.style.backgroundImage = "url(' + slides[0].src + ')"

// // function backBtn() {

// // }

// function forwardBtn() {
//     const forwardButton = document.createElement("button");
//     divForwardButton.appendChild(forwardButton);
//     forwardButton.innerText = "Forward";
// }

// // backBtn();
// forwardBtn();

// // function randomSlide() {
// //   //   const rand = slides[Math.floor(Math.random() * slides.length)];
// //   //   console.log(rand);
// //   slides.map((slide, id) => {});
// // }
