// DSR Automation – kleine Helfer (kein Framework nötig)

// Mobiles Menü
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
mainNav.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mainNav.classList.remove('open'))
);

// Sanftes Einblenden beim Scrollen
const observer = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.12 }
);
document.querySelectorAll('.card, .step, .industry, .about-media, .about-text, .contact-text, .contact-cta')
  .forEach(el => { el.classList.add('reveal'); observer.observe(el); });

// Jahr im Footer aktuell halten
document.getElementById('year').textContent = new Date().getFullYear();
