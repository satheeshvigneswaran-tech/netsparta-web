// ── Nav scroll behaviour ────────────────────────────────────────────────
const nav    = document.getElementById('nav');
const burger = document.getElementById('burger');
const links  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

burger.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
});

links.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// ── Active nav link on scroll ──────────────────────────────────────────
const sections = document.querySelectorAll('section[id], div[id="home"]');
const navLinks  = document.querySelectorAll('.nav__link:not(.nav__link--cta)');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// ── Scroll reveal ──────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${(i % 4) * 80}ms`;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Footer year ────────────────────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ── Contact form ───────────────────────────────────────────────────────
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  const orig = btn.textContent;
  btn.textContent = 'Message Sent!';
  btn.disabled = true;
  btn.style.background = '#16a34a';
  setTimeout(() => {
    btn.textContent = orig;
    btn.disabled = false;
    btn.style.background = '';
    form.reset();
  }, 3500);
});
