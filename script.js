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
bindCopy('copy-contract-hero','contract-inline');
bindCopy('copy-contract-inline','contract-inline');
bindCopy('copy-contract-bottom','contract-text');
bindCopy('copy-contract-sticky','contract-text');

// Reveal
const revealEls = document.querySelectorAll('.card,.t-item,.stat,.portrait,.contract-card');
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.style.transform='translateY(0)'; e.target.style.opacity='1'; io.unobserve(e.target); } });
},{threshold:0.15});
revealEls.forEach(el=>{ el.style.transform='translateY(14px)'; el.style.opacity='0'; el.style.transition='all .6s ease'; io.observe(el); });
