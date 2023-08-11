// Deals Carousel
const images = [
  "assets/images/deals-image-1.jpeg",
  "assets/images/deals-image-2.jpeg",
  "assets/images/deals-image-3.jpeg",
];

const imagePositions = ["37%", "45%", "55%"];

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

function updateDealsCarousel() {
  // Update images
  let firstImage = document.getElementById("deals-image-first");
  let firstImageIdx = obj[imageIdx][0];
  firstImage.style.backgroundImage = `url("${images[firstImageIdx]}")`;
  firstImage.style.backgroundPosition = imagePositions[firstImageIdx];

  let secondImage = document.getElementById("deals-image-second");
  let secondImageIdx = obj[imageIdx][1];
  secondImage.style.backgroundImage = `url("${images[secondImageIdx]}")`;
  secondImage.style.backgroundPosition = imagePositions[secondImageIdx];

  let thirdImage = document.getElementById("deals-image-third");
  let thirdImageIdx = obj[imageIdx][2];
  thirdImage.style.backgroundImage = `url("${images[thirdImageIdx]}")`;
  thirdImage.style.backgroundPosition = imagePositions[thirdImageIdx];

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

updateDealsCarousel();

document
  .getElementById("deals-pointer-left")
  .addEventListener("click", (event) => {
    imageIdx -= 1;
    imageIdx = ((imageIdx % 3) + 3) % 3;

    updateDealsCarousel();
  });

document
  .getElementById("deals-pointer-right")
  .addEventListener("click", (event) => {
    imageIdx += 1;
    imageIdx = imageIdx % 3;

    updateDealsCarousel();
  });

//   Testimonials Carousel
let currCardIdx = 0;

function updateTestimonialsCarousel() {
  console.log(currCardIdx);
  console.log(`testimonials-card-${wordMap[currCardIdx]}`);
  document
    .getElementById(`testimonials-card-${wordMap[currCardIdx]}`)
    .scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
}

document
  .getElementById("testimonials-pointer-left")
  .addEventListener("click", (event) => {
    currCardIdx -= 1;
    currCardIdx = ((currCardIdx % 3) + 3) % 3;

    updateTestimonialsCarousel();
  });

document
  .getElementById("testimonials-pointer-right")
  .addEventListener("click", (event) => {
    currCardIdx += 1;
    currCardIdx = currCardIdx % 3;

    updateTestimonialsCarousel();
  });
