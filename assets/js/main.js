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
  document.querySelectorAll('.brand span').forEach(span=>{span.innerHTML='<strong>PRECISION</strong><em>REPAIR</em>';});
})();

(function(){
  if(document.body.classList.contains('dream-home'))return;
  const header=document.querySelector('.site-header');
  const inner=document.querySelector('.header-inner');
  const brand=document.querySelector('.brand');
  const primaryNav=document.querySelector('.primary-nav');
  if(header)header.classList.add('premium-header');
  if(inner)inner.classList.add('premium-header-inner');
  if(brand){
    brand.classList.add('premium-brand');
    const span=brand.querySelector('span');
    if(span){
      span.className='premium-brand-copy';
      span.innerHTML='<strong><span>PRECISION</span><span>REPAIR</span></strong><small>TECHNIK. PRÄZISION. LEIDENSCHAFT.</small>';
    }
  }
  if(primaryNav)primaryNav.classList.add('premium-nav');
  if(inner&&!inner.querySelector('.header-cta')){
    const cta=document.createElement('a');
    cta.className='header-cta';
    cta.href='kontakt.html';
    cta.innerHTML='<span aria-hidden="true">↗</span>Anfrage senden';
    inner.appendChild(cta);
  }
})();

(function(){
  if(location.pathname.includes('kontakt')&&!document.querySelector('.owner-line')){
    const cards=[...document.querySelectorAll('.contact-card,.contact-panel,.contact-box,aside,section')];
    const card=cards.find(el=>/Telefon|E-Mail|Adresse|Schneller Kontakt/i.test(el.textContent||''));
    if(card){
      const p=document.createElement('p');
      p.className='owner-line';
      p.innerHTML='<strong>Inhaber</strong><br>Cristian Draghici';
      card.insertBefore(p,card.firstElementChild?.nextSibling||card.firstChild);
    }
  }
})();

(function(){
  if(document.getElementById('pr-final-overrides'))return;
  const heroImage='https://cdn.wccftech.com/wp-content/uploads/2020/02/Press_02-25-20_03-740x494.png';
  const style=document.createElement('style');
  style.id='pr-final-overrides';
  style.textContent=`
    :root{--pr-blue:#1688ff;--pr-blue2:#2d93ff;--pr-dark:#02070d;--pr-card:#071323}
    .site-header,.premium-header,body:not(.dream-home) .site-header{position:sticky!important;top:0!important;z-index:100!important;background:rgba(2,7,13,.94)!important;border-bottom:1px solid rgba(255,255,255,.08)!important;backdrop-filter:blur(20px)!important;box-shadow:0 18px 60px rgba(0,0,0,.28)!important}
    .header-inner,.premium-header-inner,body:not(.dream-home) .header-inner{min-height:92px!important;display:grid!important;grid-template-columns:auto 1fr auto!important;align-items:center!important;gap:28px!important;width:min(1184px,calc(100% - 72px))!important;margin:0 auto!important}
    .brand,.premium-brand,body:not(.dream-home) .brand{display:inline-flex!important;align-items:center!important;gap:14px!important;color:#fff!important;text-decoration:none!important;line-height:1!important}
    .brand img,.premium-brand img,body:not(.dream-home) .brand img{width:54px!important;height:54px!important;min-width:54px!important;object-fit:contain!important;border-radius:0!important;background:transparent!important;filter:drop-shadow(0 0 16px rgba(22,136,255,.28))!important}
    .brand span,.premium-brand-copy,body:not(.dream-home) .brand span{display:grid!important;gap:7px!important;color:#fff!important;text-transform:uppercase!important;line-height:1!important}
    .brand span strong,.premium-brand-copy strong{display:grid!important;gap:2px!important;font-size:1.35rem!important;letter-spacing:.025em!important;font-weight:950!important;line-height:.86!important;color:#fff!important}
    .brand span strong span:last-child,.premium-brand-copy strong span:last-child,.brand span em{color:var(--pr-blue2)!important;font-style:normal!important}
    .brand span small,.premium-brand-copy small{display:block!important;color:rgba(255,255,255,.7)!important;font-size:.72rem!important;letter-spacing:.14em!important;font-weight:800!important}
    .primary-nav,.premium-nav,body:not(.dream-home) .primary-nav{justify-self:center!important;display:flex!important;gap:28px!important;align-items:center!important;background:transparent!important;border:0!important;box-shadow:none!important}
    .primary-nav a,.premium-nav a{position:relative!important;padding:34px 0 30px!important;border-radius:0!important;color:rgba(255,255,255,.92)!important;background:transparent!important;font-size:.93rem!important;font-weight:800!important;text-decoration:none!important}
    .primary-nav a:hover,.primary-nav a.active,.premium-nav a:hover,.premium-nav a.active{color:var(--pr-blue2)!important;background:transparent!important}
    .primary-nav a.active:after,.primary-nav a:hover:after,.premium-nav a.active:after,.premium-nav a:hover:after{content:""!important;position:absolute!important;left:0!important;right:0!important;bottom:20px!important;height:2px!important;background:var(--pr-blue2)!important;border-radius:999px!important;box-shadow:0 0 16px rgba(22,136,255,.9)!important}
    .header-cta{display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:9px!important;min-height:48px!important;padding:0 20px!important;border-radius:7px!important;color:#fff!important;background:linear-gradient(135deg,#0575ff,#0a63df)!important;text-decoration:none!important;font-weight:850!important;box-shadow:0 12px 34px rgba(4,116,255,.28)!important;white-space:nowrap!important}
    .nav-toggle{justify-self:end!important;background:rgba(255,255,255,.08)!important;border:1px solid rgba(255,255,255,.22)!important;border-radius:10px!important}.nav-toggle span:not(.sr-only){background:#fff!important}

    body.dream-home .premium-main{background:radial-gradient(circle at 50% 3%,rgba(22,136,255,.18),transparent 35rem),linear-gradient(180deg,#02070d,#04111f 38%,#051320 100%)!important;overflow:hidden!important}
    body.dream-home .premium-hero{min-height:670px!important;padding:58px 0 58px!important;display:flex!important;align-items:center!important;background:radial-gradient(circle at 76% 38%,rgba(22,136,255,.24),transparent 25rem),linear-gradient(135deg,#02070d 0%,#061524 56%,#071c33 100%)!important;overflow:hidden!important}
    body.dream-home .premium-hero:before{background:linear-gradient(90deg,rgba(2,7,13,.84),rgba(2,7,13,.2) 64%,rgba(2,7,13,.45)),radial-gradient(circle at 84% 46%,rgba(22,136,255,.18),transparent 21rem)!important}
    body.dream-home .premium-hero-grid{display:grid!important;grid-template-columns:minmax(350px,.9fr) minmax(500px,1.1fr)!important;gap:52px!important;align-items:center!important;min-height:0!important;position:relative!important;z-index:2!important}
    body.dream-home .premium-hero-copy{padding:0!important;max-width:570px!important}.premium-eyebrow{color:var(--pr-blue2)!important}.premium-hero h1{font-size:clamp(3.35rem,5.2vw,5.55rem)!important;line-height:1.03!important;letter-spacing:-.06em!important;max-width:650px!important}.premium-hero h1 .blue{color:var(--pr-blue2)!important;text-shadow:0 0 36px rgba(45,147,255,.22)!important}.hero-lead{max-width:540px!important;font-size:1.12rem!important;line-height:1.68!important;color:rgba(255,255,255,.82)!important}.premium-trust{gap:10px!important}.premium-trust span{border-right:0!important;background:rgba(255,255,255,.055)!important;border:1px solid rgba(255,255,255,.12)!important;border-radius:999px!important;padding:8px 12px!important;min-height:34px!important}.premium-actions{gap:14px!important;margin-top:30px!important}.premium-btn{min-height:50px!important;border-radius:10px!important;padding:0 22px!important}.premium-btn-primary{background:linear-gradient(135deg,#1688ff,#18c6ff)!important;box-shadow:0 18px 42px rgba(22,136,255,.32)!important}.premium-btn-outline{background:rgba(255,255,255,.055)!important;border-color:rgba(255,255,255,.2)!important;backdrop-filter:blur(10px)!important}
    body.dream-home .hero-visual{display:block!important;position:relative!important;justify-self:end!important;align-self:center!important;width:min(100%,700px)!important;height:450px!important;padding:0!important;border:1px solid rgba(122,181,255,.24)!important;border-radius:16px!important;background-image:linear-gradient(180deg,rgba(2,7,13,.14),rgba(2,7,13,.22)),url("${heroImage}")!important;background-size:100% 100%,cover!important;background-position:center,center 38%!important;background-repeat:no-repeat!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 34px 110px rgba(0,0,0,.42),0 0 70px rgba(22,136,255,.16)!important;overflow:hidden!important;transform:none!important;cursor:pointer!important}
    body.dream-home .hero-visual:before{content:""!important;position:absolute!important;inset:0!important;z-index:1!important;background:linear-gradient(180deg,rgba(2,7,13,.18) 0%,transparent 34%,rgba(2,7,13,.55) 100%),linear-gradient(90deg,rgba(2,7,13,.2),transparent 38%,rgba(2,7,13,.16))!important;pointer-events:none!important}
    body.dream-home .hero-visual:after{content:""!important;position:absolute!important;left:0!important;right:0!important;bottom:0!important;height:18%!important;z-index:2!important;background:linear-gradient(180deg,rgba(2,7,13,0),rgba(2,7,13,.96))!important;pointer-events:none!important}
    body.dream-home .hero-visual img{opacity:0!important;width:100%!important;height:100%!important;object-fit:cover!important;pointer-events:none!important}
    body.dream-home .hero-visual:hover{transform:translateY(-3px)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 38px 120px rgba(0,0,0,.48),0 0 86px rgba(22,136,255,.2)!important}
    body.dream-home .specialties-section{padding-top:54px!important}

    body:not(.dream-home){background:#02070d!important;color:#f5f8ff!important}body:not(.dream-home) main{background:radial-gradient(circle at 50% 0%,rgba(18,123,255,.12),transparent 36rem),linear-gradient(180deg,#02070d,#06111e 42%,#02070d)!important}body:not(.dream-home) .page-hero{background:radial-gradient(circle at 78% 35%,rgba(22,136,255,.22),transparent 26rem),linear-gradient(135deg,#061425,#0f3766)!important;color:#fff!important;border-bottom:1px solid rgba(255,255,255,.08)!important}body:not(.dream-home) .page-hero h1,body:not(.dream-home) h1,body:not(.dream-home) h2,body:not(.dream-home) h3{color:#fff!important}body:not(.dream-home) .page-hero p,body:not(.dream-home) p,body:not(.dream-home) li,body:not(.dream-home) td{color:rgba(245,248,255,.78)!important}body:not(.dream-home) .eyebrow{color:var(--pr-blue2)!important}body:not(.dream-home) .section{background:#02070d!important}
    body:not(.dream-home) .detail-card,body:not(.dream-home) .gallery-card,body:not(.dream-home) .contact-card,body:not(.dream-home) .notice,body:not(.dream-home) .cta,body:not(.dream-home) form,body:not(.dream-home) .price-table-wrap,body:not(.dream-home) .info-card,body:not(.dream-home) .value-card,body:not(.dream-home) .feature-card,body:not(.dream-home) .map-placeholder,body:not(.dream-home) .map-box,body:not(.dream-home) .contact-box,body:not(.dream-home) .form-card,body:not(.dream-home) .contact-grid>*,body:not(.dream-home) .about-grid>*,body:not(.dream-home) .values-grid>*,body:not(.dream-home) .split-grid>*,body:not(.dream-home) .grid>*{background:linear-gradient(145deg,rgba(14,31,54,.96),rgba(5,12,22,.96))!important;color:rgba(245,248,255,.9)!important;border-color:rgba(122,181,255,.18)!important;box-shadow:0 22px 70px rgba(0,0,0,.22)!important}body:not(.dream-home) .contact-card *,body:not(.dream-home) .map-placeholder *,body:not(.dream-home) .map-box *,body:not(.dream-home) .info-card *,body:not(.dream-home) .value-card *,body:not(.dream-home) .feature-card *,body:not(.dream-home) .contact-box *{color:rgba(245,248,255,.88)!important;background:transparent!important}body:not(.dream-home) .contact-card h2,body:not(.dream-home) .contact-card h3,body:not(.dream-home) .contact-card h4,body:not(.dream-home) .info-card h3,body:not(.dream-home) .value-card h3,body:not(.dream-home) .feature-card h3{color:#fff!important}body:not(.dream-home) .contact-card a,body:not(.dream-home) .map-placeholder a,body:not(.dream-home) .contact-box a,body:not(.dream-home) .info-card a{color:#7fc1ff!important}
    body:not(.dream-home) input,body:not(.dream-home) textarea,body:not(.dream-home) select{background:rgba(255,255,255,.06)!important;color:#fff!important;border:1px solid rgba(255,255,255,.18)!important}body:not(.dream-home) label{color:rgba(245,248,255,.84)!important}body:not(.dream-home) .btn,body:not(.dream-home) button[type="submit"]{color:#fff!important}body:not(.dream-home) .btn-primary,body:not(.dream-home) button[type="submit"]{background:linear-gradient(135deg,#1688ff,#18c6ff)!important;border:0!important}body:not(.dream-home) .btn-secondary{background:rgba(255,255,255,.08)!important;border:1px solid rgba(255,255,255,.16)!important}
    body:not(.dream-home) .price-table-wrap,body:not(.dream-home) .price-table,body:not(.dream-home) .price-table tbody,body:not(.dream-home) .price-table tr,body:not(.dream-home) .price-table td{background:#07111f!important;color:rgba(245,248,255,.9)!important}body:not(.dream-home) .price-table-wrap{overflow-x:auto!important;border-radius:18px!important}body:not(.dream-home) .price-table{min-width:780px!important;border-collapse:collapse!important}body:not(.dream-home) .price-table th{background:#0b2240!important;color:#fff!important}body:not(.dream-home) .price-table td{background:rgba(255,255,255,.025)!important;border-color:rgba(255,255,255,.12)!important}
    body:not(.dream-home) .gallery-grid{align-items:start!important}body:not(.dream-home) .gallery-card{overflow:hidden!important;border-radius:18px!important}body:not(.dream-home) .gallery-card .project-trigger{display:block!important;width:100%!important;height:260px!important;overflow:hidden!important;border:0!important;padding:0!important;background:#07111f!important;border-radius:16px 16px 0 0!important}body:not(.dream-home) .gallery-card img{display:block!important;width:100%!important;height:100%!important;max-height:260px!important;object-fit:cover!important;object-position:center!important;border-radius:0!important}body:not(.dream-home) .gallery-card span{background:rgba(226,238,255,.96)!important;color:#07182c!important}body:not(.dream-home) .gallery-card p{color:rgba(245,248,255,.74)!important}body:not(.dream-home) .filter-btn{background:rgba(255,255,255,.07)!important;color:#fff!important;border:1px solid rgba(255,255,255,.16)!important}body:not(.dream-home) .filter-btn.active{background:#1688ff!important;color:#fff!important}
    body:not(.dream-home) .site-footer{background:#06111e!important;color:rgba(255,255,255,.78)!important;border-top:1px solid rgba(255,255,255,.08)!important}body:not(.dream-home) .site-footer a{color:#fff!important}.owner-line{margin:0 0 18px!important;padding:14px 16px!important;border:1px solid rgba(122,181,255,.18)!important;border-radius:12px!important;background:rgba(255,255,255,.045)!important;color:#fff!important}.owner-line strong{color:#2d93ff!important;text-transform:uppercase!important;letter-spacing:.08em!important;font-size:.78rem!important}
    @media(max-width:1100px){.primary-nav,.premium-nav{gap:18px!important}.header-cta{padding:0 15px!important}body.dream-home .premium-hero-grid{grid-template-columns:1fr!important;gap:34px!important}body.dream-home .hero-visual{justify-self:center!important;width:min(100%,760px)!important;height:clamp(290px,54vw,450px)!important}.premium-hero h1{font-size:clamp(3rem,10vw,5rem)!important}}
    @media(max-width:900px){.header-inner,.premium-header-inner,body:not(.dream-home) .header-inner{width:min(1184px,calc(100% - 40px))!important;display:flex!important}.header-cta{display:none!important}.nav-toggle{display:block!important}.primary-nav,.premium-nav{position:absolute!important;right:20px!important;top:calc(100% + 10px)!important;display:none!important;flex-direction:column!important;gap:0!important;min-width:220px!important;padding:16px!important;background:rgba(2,7,13,.96)!important;border:1px solid rgba(255,255,255,.18)!important;border-radius:18px!important;box-shadow:0 24px 70px rgba(0,0,0,.45)!important;backdrop-filter:blur(18px)!important}.primary-nav.open,.premium-nav.open{display:flex!important}.primary-nav a,.premium-nav a{width:100%!important;padding:14px 18px!important;border-radius:12px!important;font-size:1.05rem!important;color:#fff!important}.primary-nav a:after,.premium-nav a:after{display:none!important}.primary-nav a.active,.premium-nav a.active{background:rgba(22,136,255,.18)!important}}
    @media(max-width:760px){.brand img,.premium-brand img{width:56px!important;height:56px!important;min-width:56px!important}.brand span strong,.premium-brand-copy strong{font-size:1.16rem!important}.brand span small,.premium-brand-copy small{display:none!important}body.dream-home .premium-hero{padding:34px 0 38px!important;min-height:auto!important}.premium-trust span{width:100%!important;justify-content:flex-start!important}.premium-actions{display:grid!important;grid-template-columns:1fr!important}.premium-btn{width:100%!important}body.dream-home .hero-visual{height:clamp(250px,62vw,360px)!important}.whatsapp-float svg,body.dream-home .whatsapp-bubble svg,body.dream-home .whatsapp-icon svg{width:31px!important;height:31px!important}body:not(.dream-home) .price-table-wrap{margin-inline:0!important}body:not(.dream-home) .price-table{font-size:.92rem!important}body:not(.dream-home) .gallery-card .project-trigger{height:300px!important}body:not(.dream-home) .gallery-card img{max-height:300px!important}}
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
