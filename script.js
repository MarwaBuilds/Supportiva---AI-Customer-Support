// grabbing the elements we need
const navbar = document.getElementById('navbar');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const newsletterForm = document.getElementById('newsletterForm');

// ===== 1. sticky navbar shrink + blur on scroll =====
window.addEventListener('scroll', function () {
  // if user has scrolled down a bit, add the scrolled class
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== 2. hamburger menu toggle for mobile =====
hamburgerBtn.addEventListener('click', function () {
  // toggle open class on both the button (for the X animation) and menu
  hamburgerBtn.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// close mobile menu automatically when a link inside it is clicked
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    hamburgerBtn.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ===== 3. fake newsletter submit so the form doesn't reload the page =====
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    alert('Thanks for subscribing, ' + emailInput.value + '!');
    newsletterForm.reset();
  });
}