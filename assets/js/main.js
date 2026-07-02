const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
}

const filterButtons = document.querySelectorAll('[data-filter]');
const galleryCards = document.querySelectorAll('.gallery-card[data-category]');
if (filterButtons.length && galleryCards.length) {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle('active', item === button));
      galleryCards.forEach((card) => {
        const categories = (card.dataset.category || '').split(' ');
        card.hidden = filter !== 'all' && !categories.includes(filter);
      });
    });
  });
}

(function () {
  const whatsappSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.01 3C8.83 3 3 8.72 3 15.76c0 2.44.7 4.72 1.93 6.66L3.65 29l6.78-1.77A13.14 13.14 0 0 0 16.01 28C23.18 28 29 22.28 29 15.24 29 8.2 23.18 3 16.01 3Zm0 22.82c-1.88 0-3.62-.52-5.12-1.42l-.37-.22-4.02 1.05 1.08-3.86-.25-.4a10.35 10.35 0 0 1-1.64-5.21c0-5.8 4.63-10.51 10.32-10.51 5.7 0 10.33 4.23 10.33 9.99 0 5.79-4.63 10.58-10.33 10.58Zm5.66-7.88c-.31-.15-1.84-.9-2.12-1-.28-.1-.49-.15-.7.15-.2.3-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.15-1.32-.48-2.51-1.52-.93-.82-1.56-1.84-1.74-2.14-.18-.3-.02-.47.13-.62.14-.14.31-.36.46-.54.15-.18.2-.3.31-.51.1-.2.05-.38-.03-.54-.08-.15-.7-1.66-.95-2.28-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.54.08-.82.38-.28.3-1.08 1.04-1.08 2.54s1.1 2.95 1.26 3.15c.15.2 2.17 3.27 5.26 4.58.74.31 1.31.5 1.76.64.74.23 1.41.2 1.94.12.59-.09 1.84-.74 2.1-1.46.26-.72.26-1.34.18-1.46-.08-.13-.28-.2-.6-.35Z"/></svg>';
  document.querySelectorAll('.whatsapp-float,.whatsapp-bubble,.whatsapp-icon').forEach((btn) => {
    btn.innerHTML = whatsappSvg;
    btn.setAttribute('aria-label', 'WhatsApp Nachricht senden');
  });
})();

(function () {
  const lightbox = document.getElementById('project-lightbox');
  const lightboxImage = document.getElementById('project-lightbox-image');
  const lightboxCount = document.getElementById('project-lightbox-count');
  const lightboxTitle = document.getElementById('project-lightbox-title');
  const lightboxDescription = document.getElementById('project-lightbox-description');
  let currentGallery = [];
  let currentIndex = 0;

  function showImage() {
    if (!lightboxImage || !currentGallery.length) return;
    lightboxImage.src = currentGallery[currentIndex];
    lightboxImage.alt = `Projektbild ${currentIndex + 1} von ${currentGallery.length}`;
    if (lightboxCount) lightboxCount.textContent = `${currentIndex + 1} / ${currentGallery.length}`;
  }

  function openGallery(card) {
    if (!lightbox || !card || !card.dataset.gallery) return;
    try {
      const gallery = JSON.parse(card.dataset.gallery);
      if (!Array.isArray(gallery) || !gallery.length) return;
      currentGallery = gallery;
      currentIndex = 0;
      if (lightboxTitle) lightboxTitle.textContent = card.dataset.title || card.querySelector('h3')?.textContent || 'Projektgalerie';
      if (lightboxDescription) lightboxDescription.textContent = card.dataset.description || card.querySelector('p')?.textContent || '';
      showImage();
      lightbox.hidden = false;
      document.body.classList.add('lightbox-open');
    } catch (error) {
      console.error('Galerie konnte nicht geöffnet werden', error);
    }
  }

  function closeGallery() {
    if (!lightbox) return;
    lightbox.hidden = true;
    document.body.classList.remove('lightbox-open');
    if (lightboxImage) lightboxImage.src = '';
  }

  function nextImage() {
    if (!currentGallery.length) return;
    currentIndex = (currentIndex + 1) % currentGallery.length;
    showImage();
  }

  function prevImage() {
    if (!currentGallery.length) return;
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    showImage();
  }

  if (lightbox) {
    document.addEventListener('click', (event) => {
      const closeTarget = event.target.closest('[data-close-lightbox]');
      if (closeTarget) {
        event.preventDefault();
        closeGallery();
        return;
      }

      const nextTarget = event.target.closest('[data-lightbox-next]');
      if (nextTarget) {
        event.preventDefault();
        nextImage();
        return;
      }

      const prevTarget = event.target.closest('[data-lightbox-prev]');
      if (prevTarget) {
        event.preventDefault();
        prevImage();
        return;
      }

      const trigger = event.target.closest('.project-trigger,.project-trigger-text,.project-card-link,.hero-visual');
      const card = trigger?.closest('[data-gallery]');
      if (card) {
        event.preventDefault();
        openGallery(card);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (lightbox.hidden) return;
      if (event.key === 'Escape') closeGallery();
      if (event.key === 'ArrowRight') nextImage();
      if (event.key === 'ArrowLeft') prevImage();
    });
  }
})();

document.querySelectorAll('.reveal-on-load,.reveal-on-scroll').forEach((el) => el.classList.add('is-visible'));
