
// Smooth section scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href');
    if(id.length>1){
      e.preventDefault();
      const el = document.querySelector(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', ()=>{
  if(!nav) return;
  const open = nav.style.display === 'flex';
  nav.style.display = open ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.background = 'rgba(11,15,24,.95)';
  nav.style.position = 'absolute';
  nav.style.top = '108px';
  nav.style.right = '20px';
  nav.style.padding = '12px';
  nav.style.border = '1px solid #1a2235';
  nav.style.borderRadius = '10px';
});

// === Hardcoded Globals ===
const MOONSHOT_URL = "https://moonshot.com/";
const CONTRACT_ADDRESS = "9fNBLAXFPd2jWsBpL66sgWJ5Yy2SSCh1tMGDrdbFmoon";

// Wire Moonshot links (redundant but ensures correctness)
['buy-top','buy-nav','buy-hero','view-moonshot','buy-bottom','footer-moonshot','buy-sticky'].forEach(id=>{
  const el = document.getElementById(id);
  if(el) el.href = MOONSHOT_URL;
});

// Set contract text
['contract-text','contract-inline'].forEach(id=>{ const el = document.getElementById(id); if(el) el.textContent = CONTRACT_ADDRESS; });

// Copy helpers
function bindCopy(id, sourceId){
  const btn = document.getElementById(id);
  const src = document.getElementById(sourceId);
  btn?.addEventListener('click', async ()=>{
    try{ await navigator.clipboard.writeText(src.textContent.trim()); btn.textContent='Copied!'; setTimeout(()=>btn.textContent='Copy Contract',1200); }
    catch{ btn.textContent='Copy failed'; setTimeout(()=>btn.textContent='Copy Contract',1200); }
  });
}
bindCopy('copy-contract','contract-text');
bindCopy('copy-contract-hero','contract-text');
bindCopy('copy-contract-inline','contract-inline');
bindCopy('copy-contract-bottom','contract-text');
bindCopy('copy-contract-sticky','contract-text');

// Simple reveal
const revealEls = document.querySelectorAll('.card,.t-item,.stat,.portrait,.contract-card');
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.transform='translateY(0)';
      e.target.style.opacity='1';
      io.unobserve(e.target);
    }
  });
},{threshold:0.15});
revealEls.forEach(el=>{ el.style.transform='translateY(14px)'; el.style.opacity='0'; el.style.transition='all .6s ease'; io.observe(el); });
