
const heroSlides = [
  {
    bg: "assets/images/noi.jpeg",
    title: "Discover Unique Goods",
    desc: "Curated products for modern living.",
  },
  {
    bg: "assets/images/ri.jpg.jpeg",
    title: "Style Meets Function",
    desc: "Elevate your everyday essentials.",
  },
  {
    bg: "assets/images/wes.jpeg",
    title: "New Arrivals Weekly",
    desc: "Stay ahead with fresh finds.",
  },
];

let currentSlide = 0;

function showSlide(i) {
  const header = document.getElementById("heroCarousel");
  const title = document.getElementById("hero-title");
  const desc = document.getElementById("hero-desc");
  if (!header || !title || !desc) return;
  const slide = heroSlides[i];
  header.style.backgroundImage = `url('${slide.bg}')`;
  title.textContent = slide.title;
  desc.textContent = slide.desc;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % heroSlides.length;
  showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
  setInterval(nextSlide, 5000);
});
