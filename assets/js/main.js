const navToggle=document.querySelector('[data-nav-toggle]');
const nav=document.querySelector('[data-nav]');
if(navToggle&&nav){
  navToggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded',String(open));
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded','false');
  }));
}

const filterButtons=document.querySelectorAll('[data-filter]');
const galleryCards=document.querySelectorAll('.gallery-card[data-category]');
if(filterButtons.length&&galleryCards.length){
  filterButtons.forEach(button=>{
    button.addEventListener('click',()=>{
      const filter=button.dataset.filter;
      filterButtons.forEach(item=>item.classList.toggle('active',item===button));
      galleryCards.forEach(card=>{
        const categories=(card.dataset.category||'').split(' ');
        card.hidden=filter!=='all'&&!categories.includes(filter);
      });
    });
  });
}

(function(){
  document.querySelectorAll('.project-card[data-gallery]').forEach(card=>{
    try{
      let gallery=JSON.parse(card.dataset.gallery);
      if(!Array.isArray(gallery))return;
      if((card.dataset.title||'').includes('Gaming-PCs'))gallery=gallery.filter(src=>!src.includes('pc-build-komponenten-01.jpg'));
      if((card.dataset.title||'').includes('Custom-Wasserkühlung'))gallery=gallery.filter(src=>!src.includes('gaming-pc-build-rgb-03.jpg'));
      card.dataset.gallery=JSON.stringify(gallery);
    }catch(e){}
  });
})();

(function(){
  const whatsappSvg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.01 3C8.83 3 3 8.72 3 15.76c0 2.44.7 4.72 1.93 6.66L3.65 29l6.78-1.77A13.14 13.14 0 0 0 16.01 28C23.18 28 29 22.28 29 15.24 29 8.2 23.18 3 16.01 3Zm0 22.82c-1.88 0-3.62-.52-5.12-1.42l-.37-.22-4.02 1.05 1.08-3.86-.25-.4a10.35 10.35 0 0 1-1.64-5.21c0-5.8 4.63-10.51 10.32-10.51 5.7 0 10.33 4.23 10.33 9.99 0 5.79-4.63 10.58-10.33 10.58Zm5.66-7.88c-.31-.15-1.84-.9-2.12-1-.28-.1-.49-.15-.7.15-.2.3-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.15-1.32-.48-2.51-1.52-.93-.82-1.56-1.84-1.74-2.14-.18-.3-.02-.47.13-.62.14-.14.31-.36.46-.54.15-.18.2-.3.31-.51.1-.2.05-.38-.03-.54-.08-.15-.7-1.66-.95-2.28-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.54.08-.82.38-.28.3-1.08 1.04-1.08 2.54s1.1 2.95 1.26 3.15c.15.2 2.17 3.27 5.26 4.58.74.31 1.31.5 1.76.64.74.23 1.41.2 1.94.12.59-.09 1.84-.74 2.1-1.46.26-.72.26-1.34.18-1.46-.08-.13-.28-.2-.6-.35Z"/></svg>';
  document.querySelectorAll('.whatsapp-float,.whatsapp-bubble,.whatsapp-icon').forEach(btn=>{
    btn.innerHTML=whatsappSvg;
    if(btn.matches('a'))btn.setAttribute('aria-label','WhatsApp Nachricht senden');
  });
  document.querySelectorAll('.brand span').forEach(span=>{
    span.innerHTML='<strong>PRECISION</strong><em>REPAIR</em>';
  });
})();

(function(){
  if(document.getElementById('pr-global-premium-fixes'))return;
  const heroImage='https://cdn.wccftech.com/wp-content/uploads/2020/02/Press_02-25-20_03-740x494.png';
  const style=document.createElement('style');
  style.id='pr-global-premium-fixes';
  style.textContent=`
    .brand,body.dream-home .brand,body:not(.dream-home) .brand{display:inline-flex!important;align-items:center!important;gap:.72rem!important;text-decoration:none!important}
    .brand img,body.dream-home .brand img,body:not(.dream-home) .brand img{width:52px!important;height:52px!important;min-width:52px!important;object-fit:contain!important;border-radius:10px!important}
    .brand span,body.dream-home .brand span,body:not(.dream-home) .brand span{display:flex!important;flex-direction:column!important;align-items:flex-start!important;justify-content:center!important;gap:0!important;line-height:.88!important;font-weight:950!important;letter-spacing:.035em!important;text-transform:uppercase!important;color:#fff!important;font-size:1.04rem!important}
    .brand span strong,.brand span em{display:block!important;font:inherit!important;line-height:.9!important}
    .brand span strong{color:#fff!important}
    .brand span em{color:#2d93ff!important;font-style:normal!important;margin-top:.12rem!important}
    @media(max-width:760px){.brand img,body.dream-home .brand img,body:not(.dream-home) .brand img{width:56px!important;height:56px!important;min-width:56px!important}.brand span,body.dream-home .brand span,body:not(.dream-home) .brand span{font-size:1.16rem!important}}

    .whatsapp-float{font-size:0!important;color:#fff!important;background:#25d366!important;box-shadow:0 18px 44px rgba(37,211,102,.38)!important}
    .whatsapp-float svg{display:block!important;width:34px!important;height:34px!important;color:#fff!important}
    body.dream-home .whatsapp-bubble,body.dream-home .whatsapp-icon{font-size:0!important;color:#fff!important;background:#25d366!important;display:grid!important;place-items:center!important;box-shadow:0 18px 44px rgba(37,211,102,.28)!important}
    body.dream-home .whatsapp-bubble svg,body.dream-home .whatsapp-icon svg{display:block!important;width:34px!important;height:34px!important;color:#fff!important}
    body.dream-home .whatsapp-icon{width:58px!important;height:58px!important;min-width:58px!important;border-radius:18px!important}

    body.dream-home .premium-hero{position:relative!important;min-height:470px!important;background-color:#02070d!important;background-image:linear-gradient(90deg,rgba(2,7,13,.98) 0%,rgba(2,7,13,.92) 36%,rgba(2,7,13,.48) 64%,rgba(2,7,13,.82) 100%),radial-gradient(circle at 76% 48%,rgba(22,136,255,.22),transparent 24rem),url("${heroImage}")!important;background-size:100% 100%,100% 100%,min(52vw,700px) auto!important;background-position:center,right center,calc(100% - 70px) center!important;background-repeat:no-repeat!important;overflow:hidden!important}
    body.dream-home .premium-hero:before{background:linear-gradient(90deg,rgba(2,7,13,.38),transparent 62%)!important}
    body.dream-home .hero-visual{display:none!important}
    body.dream-home .premium-hero-grid{grid-template-columns:minmax(320px,560px) 1fr!important;min-height:430px!important;align-items:center!important}
    @media(max-width:760px){body.dream-home .premium-hero{min-height:auto!important;padding:0 0 46px!important;background-image:linear-gradient(180deg,rgba(2,7,13,.46) 0%,rgba(2,7,13,.86) 40%,#02070d 100%),linear-gradient(90deg,rgba(2,7,13,.99),rgba(2,7,13,.68)),url("${heroImage}")!important;background-size:100% 100%,100% 100%,520px auto!important;background-position:center,center,73% 94px!important}body.dream-home .premium-hero-grid{display:block!important;min-height:0!important;padding:122px 23px 0!important}body.dream-home .premium-hero h1{font-size:clamp(3.05rem,13.2vw,4.55rem)!important}body.dream-home .hero-lead{font-size:1.31rem!important}.whatsapp-float svg,body.dream-home .whatsapp-bubble svg,body.dream-home .whatsapp-icon svg{width:31px!important;height:31px!important}}

    body:not(.dream-home){background:#02070d!important;color:#f5f8ff!important}
    body:not(.dream-home) .site-header{background:rgba(2,7,13,.94)!important;border-bottom:1px solid rgba(255,255,255,.08)!important;box-shadow:0 18px 60px rgba(0,0,0,.28)!important;backdrop-filter:blur(20px)!important}
    body:not(.dream-home) .brand,body:not(.dream-home) .primary-nav a{color:#fff!important}
    body:not(.dream-home) .primary-nav a.active,body:not(.dream-home) .primary-nav a:hover{color:#2d93ff!important;background:rgba(22,136,255,.14)!important}
    body:not(.dream-home) .nav-toggle{background:rgba(255,255,255,.08)!important;border:1px solid rgba(255,255,255,.22)!important;border-radius:10px!important}
    body:not(.dream-home) .nav-toggle span:not(.sr-only){background:#fff!important}
    body:not(.dream-home) main{background:radial-gradient(circle at 50% 0%,rgba(18,123,255,.12),transparent 36rem),linear-gradient(180deg,#02070d,#06111e 42%,#02070d)!important}
    body:not(.dream-home) .page-hero{background:radial-gradient(circle at 78% 35%,rgba(22,136,255,.22),transparent 26rem),linear-gradient(135deg,#061425,#0f3766)!important;color:#fff!important;border-bottom:1px solid rgba(255,255,255,.08)!important}
    body:not(.dream-home) .page-hero h1,body:not(.dream-home) h1,body:not(.dream-home) h2,body:not(.dream-home) h3{color:#fff!important}
    body:not(.dream-home) .page-hero p,body:not(.dream-home) p,body:not(.dream-home) li,body:not(.dream-home) td{color:rgba(245,248,255,.78)!important}
    body:not(.dream-home) .eyebrow{color:#2d93ff!important}
    body:not(.dream-home) .section{background:#02070d!important}

    body:not(.dream-home) .detail-card,body:not(.dream-home) .gallery-card,body:not(.dream-home) .contact-card,body:not(.dream-home) .notice,body:not(.dream-home) .cta,body:not(.dream-home) form,body:not(.dream-home) .price-table-wrap,body:not(.dream-home) .info-card,body:not(.dream-home) .value-card,body:not(.dream-home) .feature-card,body:not(.dream-home) .map-placeholder,body:not(.dream-home) .map-box,body:not(.dream-home) .contact-box,body:not(.dream-home) .form-card,body:not(.dream-home) .contact-grid>*,body:not(.dream-home) .about-grid>*,body:not(.dream-home) .values-grid>*,body:not(.dream-home) .split-grid>*,body:not(.dream-home) .grid>*{background:linear-gradient(145deg,rgba(14,31,54,.96),rgba(5,12,22,.96))!important;color:rgba(245,248,255,.9)!important;border-color:rgba(122,181,255,.18)!important;box-shadow:0 22px 70px rgba(0,0,0,.22)!important}
    body:not(.dream-home) .contact-card *,body:not(.dream-home) .map-placeholder *,body:not(.dream-home) .map-box *,body:not(.dream-home) .info-card *,body:not(.dream-home) .value-card *,body:not(.dream-home) .feature-card *,body:not(.dream-home) .contact-box *{color:rgba(245,248,255,.88)!important;background:transparent!important}
    body:not(.dream-home) .contact-card h2,body:not(.dream-home) .contact-card h3,body:not(.dream-home) .contact-card h4,body:not(.dream-home) .info-card h3,body:not(.dream-home) .value-card h3,body:not(.dream-home) .feature-card h3{color:#fff!important}
    body:not(.dream-home) .contact-card a,body:not(.dream-home) .map-placeholder a,body:not(.dream-home) .contact-box a,body:not(.dream-home) .info-card a{color:#7fc1ff!important}

    body:not(.dream-home) input,body:not(.dream-home) textarea,body:not(.dream-home) select{background:rgba(255,255,255,.06)!important;color:#fff!important;border:1px solid rgba(255,255,255,.18)!important}
    body:not(.dream-home) label{color:rgba(245,248,255,.84)!important}
    body:not(.dream-home) .btn,body:not(.dream-home) button[type="submit"]{color:#fff!important}
    body:not(.dream-home) .btn-primary,body:not(.dream-home) button[type="submit"]{background:linear-gradient(135deg,#1688ff,#18c6ff)!important;border:0!important}
    body:not(.dream-home) .btn-secondary{background:rgba(255,255,255,.08)!important;border:1px solid rgba(255,255,255,.16)!important}

    body:not(.dream-home) .price-table-wrap,body:not(.dream-home) .price-table,body:not(.dream-home) .price-table tbody,body:not(.dream-home) .price-table tr,body:not(.dream-home) .price-table td{background:#07111f!important;color:rgba(245,248,255,.9)!important}
    body:not(.dream-home) .price-table-wrap{overflow-x:auto!important;border-radius:18px!important}
    body:not(.dream-home) .price-table{min-width:780px!important;border-collapse:collapse!important}
    body:not(.dream-home) .price-table th{background:#0b2240!important;color:#fff!important}
    body:not(.dream-home) .price-table td{background:rgba(255,255,255,.025)!important;border-color:rgba(255,255,255,.12)!important}

    body:not(.dream-home) .gallery-grid{align-items:start!important}
    body:not(.dream-home) .gallery-card{overflow:hidden!important;border-radius:18px!important}
    body:not(.dream-home) .gallery-card .project-trigger{display:block!important;width:100%!important;height:260px!important;overflow:hidden!important;border:0!important;padding:0!important;background:#07111f!important;border-radius:16px 16px 0 0!important}
    body:not(.dream-home) .gallery-card img{display:block!important;width:100%!important;height:100%!important;max-height:260px!important;object-fit:cover!important;object-position:center!important;border-radius:0!important}
    body:not(.dream-home) .gallery-card span{background:rgba(226,238,255,.96)!important;color:#07182c!important}
    body:not(.dream-home) .gallery-card p{color:rgba(245,248,255,.74)!important}
    body:not(.dream-home) .filter-btn{background:rgba(255,255,255,.07)!important;color:#fff!important;border:1px solid rgba(255,255,255,.16)!important}
    body:not(.dream-home) .filter-btn.active{background:#1688ff!important;color:#fff!important}

    body:not(.dream-home) .site-footer{background:#06111e!important;color:rgba(255,255,255,.78)!important;border-top:1px solid rgba(255,255,255,.08)!important}
    body:not(.dream-home) .site-footer a{color:#fff!important}
    @media(max-width:900px){body:not(.dream-home) .primary-nav{background:rgba(2,7,13,.96)!important;border:1px solid rgba(255,255,255,.18)!important;box-shadow:0 24px 70px rgba(0,0,0,.45)!important;backdrop-filter:blur(18px)!important}body:not(.dream-home) .primary-nav a{font-size:1.15rem!important;font-weight:900!important;color:#fff!important}}
    @media(max-width:760px){body:not(.dream-home) .price-table-wrap{margin-inline:0!important}body:not(.dream-home) .price-table{font-size:.92rem!important}body:not(.dream-home) .gallery-card .project-trigger{height:300px!important}body:not(.dream-home) .gallery-card img{max-height:300px!important}}
  `;
  document.head.appendChild(style);
})();

(function(){
  if(document.getElementById('pr-lightbox-style'))return;
  const style=document.createElement('style');
  style.id='pr-lightbox-style';
  style.textContent='.project-lightbox[hidden]{display:none!important}.project-lightbox{position:fixed!important;inset:0!important;z-index:99999!important;display:grid!important;place-items:center!important;padding:18px!important}.project-lightbox-backdrop{position:absolute!important;inset:0!important;background:rgba(2,8,18,.88)!important;backdrop-filter:blur(10px)!important}.project-lightbox-dialog{position:relative!important;z-index:1!important;width:min(1120px,100%)!important;max-height:calc(100vh - 36px)!important;display:grid!important;place-items:center!important;background:linear-gradient(145deg,#071323,#0b223c)!important;border:1px solid rgba(255,255,255,.18)!important;border-radius:22px!important;box-shadow:0 30px 95px rgba(0,0,0,.55)!important;padding:18px!important}.project-lightbox-dialog img{max-width:100%!important;max-height:calc(100vh - 150px)!important;object-fit:contain!important;border-radius:14px!important;background:#06101f!important}.project-lightbox-close,.project-lightbox-nav{position:absolute!important;z-index:2!important;border:0!important;border-radius:999px!important;background:rgba(255,255,255,.95)!important;color:#071b33!important;font:inherit!important;font-weight:900!important;cursor:pointer!important;box-shadow:0 10px 28px rgba(0,0,0,.28)!important}.project-lightbox-close{top:12px!important;right:12px!important;width:42px!important;height:42px!important;font-size:28px!important;line-height:1!important}.project-lightbox-nav{top:50%!important;transform:translateY(-50%)!important;width:50px!important;height:50px!important;font-size:40px!important;line-height:1!important}.project-lightbox-prev{left:14px!important}.project-lightbox-next{right:14px!important}.project-lightbox-count{margin:14px 0 0!important;color:rgba(255,255,255,.9)!important;font-weight:900!important}.lightbox-open{overflow:hidden!important}@media(max-width:700px){.project-lightbox{padding:10px!important}.project-lightbox-dialog{padding:12px!important}.project-lightbox-dialog img{max-height:calc(100vh - 130px)!important}.project-lightbox-nav{width:42px!important;height:42px!important;font-size:32px!important}.project-lightbox-prev{left:8px!important}.project-lightbox-next{right:8px!important}}';
  document.head.appendChild(style);
})();

const lightbox=document.getElementById('project-lightbox');
const lightboxImage=document.getElementById('project-lightbox-image');
const lightboxCount=document.getElementById('project-lightbox-count');
const lightboxTitle=document.getElementById('project-lightbox-title');
const lightboxDescription=document.getElementById('project-lightbox-description');
let currentGallery=[];let currentIndex=0;
function showImage(){if(!lightboxImage||!lightboxCount||!currentGallery.length)return;lightboxImage.src=currentGallery[currentIndex];lightboxImage.alt='Projektbild '+(currentIndex+1)+' von '+currentGallery.length;lightboxCount.textContent=(currentIndex+1)+' / '+currentGallery.length;}
function openGallery(card){if(!lightbox||!card||!card.dataset.gallery)return;try{const gallery=JSON.parse(card.dataset.gallery);if(!Array.isArray(gallery)||!gallery.length)return;currentGallery=gallery;currentIndex=0;if(lightboxTitle)lightboxTitle.textContent=card.dataset.title||card.querySelector('h3')?.textContent||'Projektgalerie';if(lightboxDescription)lightboxDescription.textContent=card.dataset.description||card.querySelector('p')?.textContent||'';showImage();lightbox.hidden=false;document.body.classList.add('lightbox-open');}catch(e){console.error('Galerie konnte nicht geöffnet werden',e);}}
function closeGallery(){if(!lightbox||!lightboxImage)return;lightbox.hidden=true;document.body.classList.remove('lightbox-open');lightboxImage.src='';}
function nextImage(){if(!currentGallery.length)return;currentIndex=(currentIndex+1)%currentGallery.length;showImage();}
function prevImage(){if(!currentGallery.length)return;currentIndex=(currentIndex-1+currentGallery.length)%currentGallery.length;showImage();}
if(lightbox){
  document.querySelectorAll('.project-card[data-gallery]').forEach(card=>{
    const triggers=card.matches('button,a')?[card]:card.querySelectorAll('.project-trigger,.project-trigger-text,.project-card-link');
    (triggers.length?triggers:[card]).forEach(trigger=>trigger.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();openGallery(card);}));
    card.addEventListener('click',event=>{if(event.target.closest('button,a'))return;openGallery(card);});
  });
  document.querySelectorAll('[data-close-lightbox]').forEach(el=>el.addEventListener('click',closeGallery));
  document.querySelector('[data-lightbox-next]')?.addEventListener('click',nextImage);
  document.querySelector('[data-lightbox-prev]')?.addEventListener('click',prevImage);
  document.addEventListener('keydown',event=>{if(lightbox.hidden)return;if(event.key==='Escape')closeGallery();if(event.key==='ArrowRight')nextImage();if(event.key==='ArrowLeft')prevImage();});
}

document.querySelectorAll('.reveal-on-load,.reveal-on-scroll').forEach(el=>el.classList.add('is-visible'));
