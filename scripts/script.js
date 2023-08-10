const images = [
  "assets/images/deals-image-1.jpeg",
  "assets/images/deals-image-2.jpeg",
  "assets/images/deals-image-3.jpeg",
];

const styles = [
  "object-position: 63%; transform: rotateY(180deg);",
  "object-position: 45%;",
  "object-position: 55%;",
];

const obj = {
  0: [0, 1, 2],
  1: [2, 0, 1],
  2: [1, 2, 0],
};

const sliderImages = {
  active: "assets/images/deals-slider-active.svg",
  inactive: "assets/images/deals-slider.svg",
};
const wordMap = { 0: "first", 1: "second", 2: "third" };

let imageIdx = 0;

function updateCarousel() {
  // Update images
  let firstImage = document.getElementById("deals-image-first");
  let firstImageIdx = obj[imageIdx][0];
  firstImage.src = images[firstImageIdx];
  firstImage.style.transform = "none";
  firstImage.style.cssText += styles[firstImageIdx];

  let secondImage = document.getElementById("deals-image-second");
  let secondImageIdx = obj[imageIdx][1];
  secondImage.src = images[secondImageIdx];
  secondImage.style.transform = "none";
  secondImage.style.cssText += styles[secondImageIdx];

  let thirdImage = document.getElementById("deals-image-third");
  let thirdImageIdx = obj[imageIdx][2];
  thirdImage.src = images[thirdImageIdx];
  thirdImage.style.transform = "none";
  thirdImage.style.cssText += styles[thirdImageIdx];

  // Update slider
  for (let idx = 0; idx < 3; ++idx) {
    let slide = document.getElementById(`deals-slider-${wordMap[idx]}`);
    if (idx === imageIdx) {
      // active
      slide.src = sliderImages["active"];
    } else {
      //inactive
      slide.src = sliderImages["inactive"];
    }
  }
}

updateCarousel();

document
  .getElementById("deals-pointer-left")
  .addEventListener("click", (event) => {
    imageIdx -= 1;
    imageIdx = ((imageIdx % 3) + 3) % 3;

    updateCarousel();
  });

document
  .getElementById("deals-pointer-right")
  .addEventListener("click", (event) => {
    imageIdx += 1;
    imageIdx = imageIdx % 3;

    updateCarousel();
  });
