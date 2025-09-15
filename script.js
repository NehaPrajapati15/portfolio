// script.js - small interactivity for the portfolio

// update year
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// smooth scrolling & nav active state
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.forEach(x => x.classList.remove('active'));
    a.classList.add('active');
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
  });
});

// mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinksEl = document.getElementById('navLinks');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    if (navLinksEl.style.display === 'flex') {
      navLinksEl.style.display = '';
    } else {
      navLinksEl.style.display = 'flex';
      navLinksEl.style.flexDirection = 'column';
      navLinksEl.style.gap = '0.5rem';
      navLinksEl.style.background = 'rgba(255,255,255,0.02)';
      navLinksEl.style.padding = '0.6rem';
      navLinksEl.style.borderRadius = '8px';
    }
  });
}

// View Projects button
const viewProjectsBtn = document.getElementById('viewProjectsBtn');
if (viewProjectsBtn) {
  viewProjectsBtn.addEventListener('click', () => {
    const p = document.getElementById('projects');
    if (p) p.scrollIntoView({behavior: 'smooth'});
  });
}

// contact form - mailto fallback
function handleContact(e){
  e.preventDefault();
  const name = encodeURIComponent(document.getElementById('name').value.trim());
  const email = encodeURIComponent(document.getElementById('email').value.trim());
  const message = encodeURIComponent(document.getElementById('message').value.trim());
  const subject = encodeURIComponent('Portfolio contact from ' + name);
  const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
  window.location.href = `mailto:work.nehaprajapati07@gmail.com?subject=${subject}&body=${body}`;
  return false;
}
window.handleContact = handleContact;

// reveal on scroll
const io = new IntersectionObserver(entries => {
  for (const e of entries) {
    if (e.isIntersecting) e.target.classList.add('visible');
  }
}, {threshold: 0.08});

document.querySelectorAll('[data-fade]').forEach(el => io.observe(el));
