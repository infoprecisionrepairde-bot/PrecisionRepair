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
