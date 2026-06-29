const quoteForm = document.querySelector(".estimate-form");
if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(quoteForm);
    const subject = encodeURIComponent("LevelLine Construction quote request");
    const body = encodeURIComponent([
      "New quote request",
      "",
      "Name: " + (data.get("name") || ""),
      "Contact: " + (data.get("contact") || ""),
      "Project type: " + (data.get("projectType") || ""),
      "Timeline: " + (data.get("timeline") || ""),
      "Location: " + (data.get("location") || ""),
      "",
      "Message:",
      data.get("message") || ""
    ].join("\n"));
    window.location.href = "mailto:info@levelline-construction.com?subject=" + subject + "&body=" + body;
  });
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

function setupSlideshow() {
  const root = document.querySelector("#project-slideshow");
  if (!root) return;

  const slides = Array.from(root.querySelectorAll(".slide"));
  const dotsWrap = root.querySelector(".slide-dots");
  let index = 0;
  let timer;

  const show = (next) => {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
    dotsWrap.querySelectorAll("button").forEach((dot, i) => dot.classList.toggle("is-active", i === index));
  };

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", "Show project " + (i + 1));
    dot.addEventListener("click", () => {
      show(i);
      restart();
    });
    dotsWrap.appendChild(dot);
  });

  const next = () => show(index + 1);
  const restart = () => {
    window.clearInterval(timer);
    timer = window.setInterval(next, 6200);
  };

  root.querySelector(".prev").addEventListener("click", () => { show(index - 1); restart(); });
  root.querySelector(".next").addEventListener("click", () => { show(index + 1); restart(); });
  root.addEventListener("mouseenter", () => window.clearInterval(timer));
  root.addEventListener("mouseleave", restart);

  show(0);
  restart();
}

function setupTestimonials() {
  const root = document.querySelector("#testimonial-slider");
  if (!root) return;

  const slides = Array.from(root.querySelectorAll(".testimonial"));
  const dotsWrap = root.querySelector(".testimonial-dots");
  let index = 0;

  const show = (next) => {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
    dotsWrap.querySelectorAll("button").forEach((dot, i) => dot.classList.toggle("is-active", i === index));
  };

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", "Show testimonial " + (i + 1));
    dot.addEventListener("click", () => show(i));
    dotsWrap.appendChild(dot);
  });

  show(0);
  window.setInterval(() => show(index + 1), 7200);
}

const categoryNames = [
  "All",
  "Interior Trim",
  "Doors",
  "Baseboards",
  "Crown Molding",
  "Stairs",
  "Handrails",
  "Custom Work",
  "Before & After"
];

function range(count, mapper) {
  return Array.from({ length: count }, (_, i) => mapper(i + 1));
}

const duplicateTrimNumbers = new Set([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 28, 29, 32, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49
]);

const accentItems = range(50, (n) => {
  const featured = [6, 3, 14, 27, 15, 36, 46, 2, 26, 22, 33, 42];
  return {
    src: "./assets/gallery/accent-wall-" + String(n).padStart(2, "0") + ".jpg",
    category: featured.includes(n) ? "Custom Work" : "Interior Trim",
    title: featured.includes(n) ? "Premium accent wall detail" : "Accent wall concept",
    ratio: n % 5 === 0 ? "3 / 4" : n % 3 === 0 ? "4 / 3" : "4 / 5"
  };
});

function trimCategory(n) {
  if (n <= 22) return "Interior Trim";
  if (n <= 42) return "Doors";
  if (n <= 62) return "Baseboards";
  if (n <= 82) return "Crown Molding";
  if (n <= 104) return "Stairs";
  if (n <= 118) return "Handrails";
  if (n <= 128) return "Custom Work";
  return "Before & After";
}

const trimItems = range(136, (n) => ({
  number: n,
  src: "./assets/trim/trim-" + String(n).padStart(3, "0") + ".jpg",
  category: trimCategory(n),
  title: trimCategory(n) + " detail",
  ratio: n % 7 === 0 ? "3 / 4" : n % 4 === 0 ? "4 / 3" : "4 / 5"
})).filter((item) => !duplicateTrimNumbers.has(item.number));

const portfolioItems = [
  ...accentItems.filter((item, i) => [5, 2, 13, 26, 14, 35, 45, 1, 25, 21, 32, 41].includes(i)),
  ...trimItems,
  ...accentItems.filter((item, i) => ![5, 2, 13, 26, 14, 35, 45, 1, 25, 21, 32, 41].includes(i))
];

const showcaseSources = new Set([
  "./assets/gallery/accent-wall-06.jpg",
  "./assets/gallery/accent-wall-03.jpg",
  "./assets/gallery/accent-wall-14.jpg",
  "./assets/gallery/accent-wall-27.jpg",
  "./assets/gallery/accent-wall-15.jpg",
  "./assets/gallery/accent-wall-36.jpg",
  "./assets/gallery/accent-wall-46.jpg",
  "./assets/gallery/accent-wall-02.jpg",
  "./assets/gallery/accent-wall-26.jpg",
  "./assets/gallery/accent-wall-22.jpg",
  "./assets/gallery/accent-wall-33.jpg",
  "./assets/gallery/accent-wall-42.jpg",
  "./assets/trim/trim-050.jpg",
  "./assets/trim/trim-063.jpg",
  "./assets/trim/trim-083.jpg",
  "./assets/trim/trim-091.jpg",
  "./assets/trim/trim-105.jpg",
  "./assets/trim/trim-112.jpg",
  "./assets/trim/trim-122.jpg",
  "./assets/trim/trim-131.jpg"
]);

const showcaseItems = portfolioItems.filter((item) => showcaseSources.has(item.src)).slice(0, 20);

function setupPortfolio() {
  const controls = document.querySelector("#portfolio-controls");
  const grid = document.querySelector("#portfolio-grid");
  const lightbox = document.querySelector("#lightbox");
  if (!controls || !grid || !lightbox) return;

  const lightboxImage = lightbox.querySelector("img");
  const lightboxCaption = lightbox.querySelector("p");
  const closeButton = lightbox.querySelector(".lightbox-close");

  const openLightbox = (item) => {
    lightboxImage.src = item.src;
    lightboxImage.alt = item.title;
    lightboxCaption.textContent = item.category + " - " + item.title;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-lightbox-open");
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-lightbox-open");
    lightboxImage.src = "";
  };

  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });

  const sourceItems = grid.dataset.galleryMode === "showcase" ? showcaseItems : portfolioItems;

  const render = (category) => {
    grid.innerHTML = "";
    const items = category === "All" ? sourceItems : sourceItems.filter((item) => item.category === category);

    items.forEach((item, i) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "portfolio-item";
      button.style.setProperty("--ratio", item.ratio);
      button.style.animationDelay = Math.min(i * 18, 420) + "ms";
      button.innerHTML = [
        '<img loading="lazy" src="' + item.src + '" alt="' + item.title + '">',
        '<span class="portfolio-caption"><span>' + item.category + '</span><strong>' + item.title + '</strong></span>'
      ].join("");
      button.addEventListener("click", () => openLightbox(item));
      grid.appendChild(button);
    });
  };

  const visibleCategories = categoryNames.filter((category) => (
    category === "All" || sourceItems.some((item) => item.category === category)
  ));

  visibleCategories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = category;
    button.classList.toggle("is-active", category === "All");
    button.addEventListener("click", () => {
      controls.querySelectorAll("button").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      render(category);
    });
    controls.appendChild(button);
  });

  render("All");
}

setupSlideshow();
setupTestimonials();
setupPortfolio();
