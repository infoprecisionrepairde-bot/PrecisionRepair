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
  document.querySelectorAll('.brand span').forEach(span=>{span.innerHTML='<strong>PRECISION</strong><em>REPAIR</em>';});
  const inner=document.querySelector('.header-inner');
  if(inner&&!inner.querySelector('.header-cta')&&!document.body.classList.contains('dream-home')){
    const cta=document.createElement('a');
    cta.className='header-cta';
    cta.href='kontakt.html';
    cta.textContent='↗ Anfrage senden';
    inner.appendChild(cta);
  }
})();

(function(){
  if(document.getElementById('hero-mockup-background-fix'))return;
  const style=document.createElement('style');
  style.id='hero-mockup-background-fix';
  style.textContent=`
    :root{--pr-blue:#1688ff;--pr-blue2:#2d93ff;--pr-dark:#02070d}.site-header{position:sticky!important;top:0!important;z-index:1000!important;background:rgba(2,7,13,.94)!important;border-bottom:1px solid rgba(255,255,255,.08)!important;backdrop-filter:blur(20px)!important}.header-inner{min-height:92px!important;display:grid!important;grid-template-columns:auto 1fr auto!important;align-items:center!important;gap:28px!important;width:min(1184px,calc(100% - 72px))!important;margin:auto!important}.brand{display:inline-flex!important;align-items:center!important;gap:14px!important;color:#fff!important;text-decoration:none!important}.brand img{width:54px!important;height:54px!important;min-width:54px!important;object-fit:contain!important;filter:drop-shadow(0 0 16px rgba(22,136,255,.28))!important}.brand span{display:grid!important;gap:7px!important;text-transform:uppercase!important;line-height:1!important}.brand span strong{display:grid!important;gap:2px!important;font-size:1.35rem!important;font-weight:950!important;line-height:.86!important;color:#fff!important}.brand span em,.brand span strong span:last-child{color:var(--pr-blue2)!important;font-style:normal!important}.brand span:after{content:'TECHNIK. PRÄZISION. LEIDENSCHAFT.';display:block;color:rgba(255,255,255,.7);font-size:.72rem;letter-spacing:.14em;font-weight:800}.primary-nav{justify-self:center!important;display:flex!important;gap:28px!important;align-items:center!important}.primary-nav a{position:relative!important;padding:34px 0 30px!important;color:rgba(255,255,255,.92)!important;background:transparent!important;font-size:.93rem!important;font-weight:800!important;text-decoration:none!important}.primary-nav a.active,.primary-nav a:hover{color:var(--pr-blue2)!important}.primary-nav a.active:after,.primary-nav a:hover:after{content:''!important;position:absolute!important;left:0!important;right:0!important;bottom:20px!important;height:2px!important;background:var(--pr-blue2)!important;border-radius:999px!important}.header-cta{display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:48px!important;padding:0 20px!important;border-radius:7px!important;color:#fff!important;background:linear-gradient(135deg,#0575ff,#0a63df)!important;text-decoration:none!important;font-weight:850!important;box-shadow:0 12px 34px rgba(4,116,255,.28)!important}.nav-toggle{background:rgba(255,255,255,.08)!important;border:1px solid rgba(255,255,255,.22)!important;border-radius:10px!important}.nav-toggle span:not(.sr-only){background:#fff!important}
    body.dream-home{background:#02070d!important;color:#fff!important}.premium-main{background:#02070d!important;overflow:hidden!important}.dream-home .container{width:min(1184px,calc(100% - 72px))!important;margin-inline:auto!important}.premium-hero{position:relative!important;min-height:650px!important;padding:64px 0 74px!important;display:flex!important;align-items:center!important;background:radial-gradient(circle at 74% 45%,rgba(22,136,255,.26),transparent 30rem),linear-gradient(135deg,#02070d 0%,#061323 48%,#05101d 100%)!important;isolation:isolate!important;overflow:hidden!important}.premium-hero:before{content:''!important;position:absolute!important;inset:0!important;z-index:0!important;background:linear-gradient(90deg,rgba(2,7,13,.98) 0%,rgba(2,7,13,.86) 34%,rgba(2,7,13,.48) 58%,rgba(2,7,13,.08) 100%)!important;pointer-events:none!important}.premium-hero:after{content:''!important;position:absolute!important;z-index:0!important;right:-50px!important;top:50%!important;transform:translateY(-50%)!important;width:min(64vw,880px)!important;height:min(46vw,520px)!important;background-image:url('Mockup Hero.png')!important;background-size:contain!important;background-repeat:no-repeat!important;background-position:center!important;filter:saturate(1.12) contrast(1.08) brightness(.98) drop-shadow(0 42px 80px rgba(0,0,0,.42))!important;pointer-events:none!important}.premium-hero-grid{position:relative!important;z-index:2!important;display:block!important}.premium-hero-copy{max-width:520px!important;padding:0!important}.premium-eyebrow{margin:0 0 18px!important;color:var(--pr-blue2)!important;font-size:.82rem!important;letter-spacing:.12em!important;text-transform:uppercase!important;font-weight:950!important}.premium-hero h1{margin:0!important;max-width:540px!important;color:#fff!important;font-size:clamp(3.65rem,5.6vw,5.65rem)!important;line-height:1.03!important;letter-spacing:-.065em!important;font-weight:950!important;text-shadow:0 10px 44px rgba(0,0,0,.38)!important}.premium-hero h1 span{display:block!important}.premium-hero h1 .blue{color:var(--pr-blue2)!important;text-shadow:0 0 36px rgba(45,147,255,.25)!important}.hero-lead{max-width:485px!important;margin:26px 0 0!important;color:rgba(255,255,255,.82)!important;font-size:1.08rem!important;line-height:1.62!important}.premium-trust{display:flex!important;align-items:center!important;flex-wrap:wrap!important;gap:10px!important;margin-top:26px!important}.premium-trust span{display:inline-flex!important;align-items:center!important;gap:8px!important;padding:7px 12px!important;border:1px solid rgba(255,255,255,.13)!important;border-radius:999px!important;background:rgba(255,255,255,.055)!important}.premium-actions{display:flex!important;flex-wrap:wrap!important;gap:16px!important;margin-top:30px!important}.premium-btn{min-height:50px!important;padding:0 22px!important;border-radius:8px!important}.hero-visual{display:none!important}.specialties-section{padding-top:58px!important;background:radial-gradient(circle at 50% 0%,rgba(0,112,255,.16),transparent 28rem),linear-gradient(180deg,#03101c,#051320)!important}
    body:not(.dream-home){background:#02070d!important;color:#f5f8ff!important}body:not(.dream-home) main{background:linear-gradient(180deg,#02070d,#06111e 42%,#02070d)!important}body:not(.dream-home) .page-hero{background:linear-gradient(135deg,#061425,#0f3766)!important;color:#fff!important}body:not(.dream-home) h1,body:not(.dream-home) h2,body:not(.dream-home) h3{color:#fff!important}body:not(.dream-home) p,body:not(.dream-home) li,body:not(.dream-home) td{color:rgba(245,248,255,.78)!important}body:not(.dream-home) .section{background:#02070d!important}.whatsapp-float{font-size:0!important;color:#fff!important;background:#25d366!important;box-shadow:0 18px 44px rgba(37,211,102,.38)!important}.whatsapp-float:before{content:'☏';font-size:28px;color:#fff}.owner-line{margin:0 0 18px!important;padding:14px 16px!important;border:1px solid rgba(122,181,255,.18)!important;border-radius:12px!important;background:rgba(255,255,255,.045)!important;color:#fff!important}.owner-line strong{color:#2d93ff!important}
    @media(max-width:1100px){.premium-hero:after{right:-190px!important;width:78vw!important;height:56vw!important;opacity:.62!important}.premium-hero h1{font-size:clamp(3.2rem,9vw,5rem)!important}}
    @media(max-width:900px){.header-inner{width:min(1184px,calc(100% - 40px))!important;display:flex!important}.header-cta{display:none!important}.nav-toggle{display:block!important}.primary-nav{position:absolute!important;right:20px!important;top:calc(100% + 10px)!important;display:none!important;flex-direction:column!important;gap:0!important;min-width:220px!important;padding:16px!important;background:rgba(2,7,13,.96)!important;border:1px solid rgba(255,255,255,.18)!important;border-radius:18px!important;box-shadow:0 24px 70px rgba(0,0,0,.45)!important}.primary-nav.open{display:flex!important}.primary-nav a{width:100%!important;padding:14px 18px!important;border-radius:12px!important}.primary-nav a:after{display:none!important}.primary-nav a.active{background:rgba(22,136,255,.18)!important}}
    @media(max-width:760px){.brand img{width:56px!important;height:56px!important;min-width:56px!important}.brand span strong{font-size:1.16rem!important}.brand span:after{display:none!important}.premium-hero{min-height:auto!important;padding:56px 0 46px!important;background:linear-gradient(160deg,#02070d,#061323 55%,#02070d)!important}.premium-hero:before{background:linear-gradient(180deg,rgba(2,7,13,.56),rgba(2,7,13,.9) 54%,rgba(2,7,13,.98)),linear-gradient(90deg,rgba(2,7,13,.92),rgba(2,7,13,.2))!important}.premium-hero:after{right:-48%!important;top:36%!important;width:122vw!important;height:78vw!important;opacity:.26!important;background-position:center!important}.dream-home .container{width:min(1184px,calc(100% - 40px))!important}.premium-hero-copy{max-width:100%!important}.premium-hero h1{font-size:clamp(3.55rem,13vw,4.8rem)!important}.hero-lead{font-size:1.05rem!important;line-height:1.72!important;max-width:100%!important}.premium-trust{display:grid!important;gap:12px!important}.premium-trust span{width:100%!important;padding:12px 18px!important;background:rgba(255,255,255,.07)!important}.premium-actions{display:grid!important;grid-template-columns:1fr!important}.premium-btn{width:100%!important}.specialties-section{padding-top:44px!important}}
  `;
  document.head.appendChild(style);
})();

(function(){
  const lightbox=document.getElementById('project-lightbox');
  const lightboxImage=document.getElementById('project-lightbox-image');
  const lightboxCount=document.getElementById('project-lightbox-count');
  let currentGallery=[];let currentIndex=0;
  function showImage(){if(!lightboxImage||!lightboxCount||!currentGallery.length)return;lightboxImage.src=currentGallery[currentIndex];lightboxCount.textContent=(currentIndex+1)+' / '+currentGallery.length;}
  function openGallery(card){if(!lightbox||!card?.dataset.gallery)return;try{const gallery=JSON.parse(card.dataset.gallery);if(!gallery.length)return;currentGallery=gallery;currentIndex=0;showImage();lightbox.hidden=false;document.body.classList.add('lightbox-open');}catch(e){}}
  function closeGallery(){if(!lightbox)return;lightbox.hidden=true;document.body.classList.remove('lightbox-open');if(lightboxImage)lightboxImage.src='';}
  function nextImage(){currentIndex=(currentIndex+1)%currentGallery.length;showImage();}
  function prevImage(){currentIndex=(currentIndex-1+currentGallery.length)%currentGallery.length;showImage();}
  if(lightbox){
    document.querySelectorAll('.project-card[data-gallery]').forEach(card=>{
      card.querySelectorAll('.project-trigger,.project-trigger-text,.project-card-link').forEach(trigger=>trigger.addEventListener('click',e=>{e.preventDefault();openGallery(card);}));
      card.addEventListener('click',e=>{if(!e.target.closest('button,a'))openGallery(card);});
    });
    document.querySelectorAll('[data-close-lightbox]').forEach(el=>el.addEventListener('click',closeGallery));
    document.querySelector('[data-lightbox-next]')?.addEventListener('click',nextImage);
    document.querySelector('[data-lightbox-prev]')?.addEventListener('click',prevImage);
    document.addEventListener('keydown',e=>{if(lightbox.hidden)return;if(e.key==='Escape')closeGallery();if(e.key==='ArrowRight')nextImage();if(e.key==='ArrowLeft')prevImage();});
  }
})();

document.querySelectorAll('.reveal-on-load,.reveal-on-scroll').forEach(el=>el.classList.add('is-visible'));
