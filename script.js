
// Accessible original-page toggles; no dependencies required.
document.querySelectorAll('.page-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    const isOpening = panel.hidden;
    panel.hidden = !isOpening;
    button.setAttribute('aria-expanded', String(isOpening));
    button.textContent = isOpening ? 'Hide original page ↑' : 'View original page ↗';
  });
});

// Filter the table of contents without modifying report content.
const tocSearch = document.getElementById('toc-search');
tocSearch.addEventListener('input', () => {
  const query = tocSearch.value.trim().toLowerCase();
  document.querySelectorAll('#toc a').forEach(link => {
    link.hidden = !link.textContent.toLowerCase().includes(query);
  });
});

// Reading accessibility controls.
let fontScale = 1;
function adjustFont(delta) {
  fontScale = Math.max(0.85, Math.min(1.3, fontScale + delta));
  document.documentElement.style.setProperty('--font-scale', fontScale.toFixed(2));
}
document.getElementById('font-up').addEventListener('click', () => adjustFont(0.05));
document.getElementById('font-down').addEventListener('click', () => adjustFont(-0.05));

// Highlight the current chapter in the sidebar.
const chapters = [...document.querySelectorAll('.chapter')];
const links = [...document.querySelectorAll('#toc > a')];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(link => link.classList.toggle('active', link.hash === '#' + entry.target.id));
  });
}, { rootMargin: '-100px 0px -65% 0px' });
chapters.forEach(chapter => observer.observe(chapter));
