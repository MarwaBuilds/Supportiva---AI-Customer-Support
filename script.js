// grabbing the elements we need
const navbar = document.getElementById('navbar');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const newsletterForm = document.getElementById('newsletterForm');
const toggleBtns = document.querySelectorAll('.toggle-btn');

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

// ===== 3. pricing toggle (monthly / yearly) - just a UI switch =====
toggleBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    // remove active from all, then add to the one clicked
    toggleBtns.forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');

    // NOTE: this is just visual for now, hook this up
    // to real price data later if needed
    console.log('Billing plan switched to:', btn.dataset.plan);
  });
});

// ===== 4. fake newsletter submit so the form doesn't reload the page =====
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    alert('Thanks for subscribing, ' + emailInput.value + '!');
    newsletterForm.reset();
  });
}

// ===== 5. smooth scroll for any in-page anchor links (extra safety net) =====
// html already has scroll-behavior: smooth but this handles older browsers
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.length > 1) {
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});