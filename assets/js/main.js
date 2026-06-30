const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const filterButtons = document.querySelectorAll("[data-filter]");
const galleryCards = document.querySelectorAll(".gallery-card[data-category]");

if (filterButtons.length && galleryCards.length) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      galleryCards.forEach((card) => {
        const categories = card.dataset.category.split(" ");
        card.hidden = filter !== "all" && !categories.includes(filter);
      });
    });
  });
}

const lightboxStyleId = "precision-repair-lightbox-style";
if (!document.getElementById(lightboxStyleId)) {
  const style = document.createElement("style");
  style.id = lightboxStyleId;
  style.textContent = `
    .project-trigger, .project-trigger-text {
      cursor: pointer;
    }

    .project-trigger {
      display: block;
      width: 100%;
      padding: 0;
      border: 0;
      background: #071b33;
      text-align: left;
    }

    .project-trigger img {
      transition: transform .22s ease, opacity .22s ease;
    }

    .project-card:hover .project-trigger img,
    .project-trigger:focus-visible img {
      transform: scale(1.035);
      opacity: .94;
    }

    .project-lightbox[hidden] { display: none !important; }

    .project-lightbox {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: grid;
      place-items: center;
      padding: 22px;
    }

    .project-lightbox-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(3, 8, 18, .9);
      backdrop-filter: blur(10px);
    }

    .project-lightbox-dialog {
      position: relative;
      z-index: 1;
      width: min(1180px, 100%);
      max-height: calc(100vh - 44px);
      display: grid;
      place-items: center;
      background: linear-gradient(145deg, #071323, #0b223c);
      border: 1px solid rgba(255, 255, 255, .18);
      border-radius: 22px;
      box-shadow: 0 30px 95px rgba(0, 0, 0, .55);
      padding: 18px;
    }

    .project-lightbox-dialog img {
      max-width: 100%;
      max-height: calc(100vh - 150px);
      object-fit: contain;
      border-radius: 14px;
      background: #06101f;
    }

    .project-lightbox-close,
    .project-lightbox-nav {
      position: absolute;
      z-index: 2;
      border: 1px solid rgba(255, 255, 255, .24);
      border-radius: 999px;
      background: rgba(255, 255, 255, .94);
      color: #071b33;
      font: inherit;
      font-weight: 900;
      cursor: pointer;
      box-shadow: 0 10px 28px rgba(0, 0, 0, .28);
    }

    .project-lightbox-close {
      top: 12px;
      right: 12px;
      width: 42px;
      height: 42px;
      font-size: 28px;
      line-height: 1;
    }

    .project-lightbox-nav {
      top: 50%;
      transform: translateY(-50%);
      width: 50px;
      height: 50px;
      font-size: 40px;
      line-height: 1;
    }

    .project-lightbox-prev { left: 14px; }
    .project-lightbox-next { right: 14px; }

    .project-lightbox-count {
      margin: 14px 0 0;
      color: rgba(255, 255, 255, .88);
      font-weight: 800;
      letter-spacing: .03em;
    }

    .lightbox-open { overflow: hidden; }

    @media (max-width: 700px) {
      .project-lightbox { padding: 10px; }
      .project-lightbox-dialog { padding: 12px; }
      .project-lightbox-dialog img { max-height: calc(100vh - 130px); }
      .project-lightbox-nav { width: 42px; height: 42px; font-size: 32px; }
      .project-lightbox-prev { left: 8px; }
      .project-lightbox-next { right: 8px; }
    }
  `;
  document.head.appendChild(style);
}

const lightbox = document.getElementById("project-lightbox");
const lightboxImage = document.getElementById("project-lightbox-image");
const lightboxCount = document.getElementById("project-lightbox-count");
let currentGallery = [];
let currentIndex = 0;

function showLightboxImage() {
  if (!lightbox || !lightboxImage || !lightboxCount || !currentGallery.length) return;
  lightboxImage.src = currentGallery[currentIndex];
  lightboxImage.alt = `Projektbild ${currentIndex + 1} von ${currentGallery.length}`;
  lightboxCount.textContent = `${currentIndex + 1} / ${currentGallery.length}`;
}

function openGalleryFromCard(card) {
  if (!lightbox || !card || !card.dataset.gallery) return;
  try {
    const gallery = JSON.parse(card.dataset.gallery);
    if (!Array.isArray(gallery) || gallery.length === 0) return;
    currentGallery = gallery;
    currentIndex = 0;
    showLightboxImage();
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
  } catch (error) {
    console.error("Galerie konnte nicht geöffnet werden", error);
  }
}

function closeGallery() {
  if (!lightbox || !lightboxImage) return;
  lightbox.hidden = true;
  document.body.classList.remove("lightbox-open");
  lightboxImage.src = "";
}

function nextImage() {
  if (!currentGallery.length) return;
  currentIndex = (currentIndex + 1) % currentGallery.length;
  showLightboxImage();
}

function prevImage() {
  if (!currentGallery.length) return;
  currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  showLightboxImage();
}

if (lightbox) {
  document.querySelectorAll(".project-card[data-gallery]").forEach((card) => {
    if (card.dataset.lightboxBound === "true") return;
    card.dataset.lightboxBound = "true";
    const triggers = card.querySelectorAll(".project-trigger, .project-trigger-text, .project-card-link");
    const elements = triggers.length ? triggers : [card];
    elements.forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        openGalleryFromCard(card);
      });
    });
  });

  document.querySelectorAll("[data-close-lightbox]").forEach((element) => element.addEventListener("click", closeGallery));
  document.querySelector("[data-lightbox-next]")?.addEventListener("click", nextImage);
  document.querySelector("[data-lightbox-prev]")?.addEventListener("click", prevImage);
  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;
    if (event.key === "Escape") closeGallery();
    if (event.key === "ArrowRight") nextImage();
    if (event.key === "ArrowLeft") prevImage();
  });
}
