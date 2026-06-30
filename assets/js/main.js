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

// Styling for portfolio project buttons and the image lightbox.
// Injected here so the live GitHub Pages version gets the gallery design even if the CSS file is cached.
const lightboxStyleId = "precision-repair-lightbox-style";
if (!document.getElementById(lightboxStyleId)) {
  const style = document.createElement("style");
  style.id = lightboxStyleId;
  style.textContent = `
    .project-trigger {
      display: block;
      width: 100%;
      padding: 0;
      border: 0;
      background: #071b33;
      cursor: pointer;
      text-align: left;
    }

    .project-trigger img {
      transition: transform .22s ease, opacity .22s ease;
    }

    .project-trigger:hover img,
    .project-trigger:focus-visible img {
      transform: scale(1.03);
      opacity: .92;
    }

    .project-lightbox[hidden] {
      display: none !important;
    }

    .project-lightbox {
      position: fixed;
      inset: 0;
      z-index: 999;
      display: grid;
      place-items: center;
      padding: 22px;
    }

    .project-lightbox-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(3, 12, 24, .86);
      backdrop-filter: blur(8px);
    }

    .project-lightbox-dialog {
      position: relative;
      z-index: 1;
      width: min(1100px, 100%);
      max-height: calc(100vh - 44px);
      display: grid;
      place-items: center;
      background: #071b33;
      border: 1px solid rgba(255, 255, 255, .16);
      border-radius: 18px;
      box-shadow: 0 24px 80px rgba(0, 0, 0, .45);
      padding: 18px;
    }

    .project-lightbox-dialog img {
      max-width: 100%;
      max-height: calc(100vh - 150px);
      object-fit: contain;
      border-radius: 12px;
      background: #0d2a4a;
    }

    .project-lightbox-close,
    .project-lightbox-nav {
      position: absolute;
      z-index: 2;
      border: 0;
      border-radius: 999px;
      background: rgba(255, 255, 255, .92);
      color: #071b33;
      font: inherit;
      font-weight: 900;
      cursor: pointer;
      box-shadow: 0 10px 28px rgba(0, 0, 0, .22);
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
      width: 48px;
      height: 48px;
      font-size: 38px;
      line-height: 1;
    }

    .project-lightbox-prev { left: 14px; }
    .project-lightbox-next { right: 14px; }

    .project-lightbox-count {
      margin: 14px 0 0;
      color: rgba(255, 255, 255, .86);
      font-weight: 800;
    }

    .lightbox-open {
      overflow: hidden;
    }

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
