const toggleBtn = document.getElementById('menu-toggle');
const slideMenu = document.getElementById('slide-menu');
const closeBtn = document.getElementById('close-btn');

toggleBtn.addEventListener('click', () => {
  slideMenu.classList.add('open');
  toggleBtn.classList.add('hide');
});

closeBtn.addEventListener('click', () => {
  slideMenu.classList.remove('open');
  toggleBtn.classList.remove('hide');
});

const menuLinks = slideMenu.querySelectorAll('a');
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    slideMenu.classList.remove('open');
    toggleBtn.classList.remove('hide');
  });
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('✅ Thank you for your message! We’ll get back to you soon.');
  contactForm.reset();
});
