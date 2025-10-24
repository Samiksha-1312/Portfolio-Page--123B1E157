// ==============================
// Responsive Navbar Toggle
// ==============================
const hamburger = document.getElementById("hamburger");
const navLinksContainer = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinksContainer.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// Close menu when a link is clicked (for mobile UX)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinksContainer.classList.remove("active");
    hamburger.classList.remove("open");
  });
});

// ==============================
// Smooth Scroll with Offset
// ==============================
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    const headerOffset = 70; // height of navbar
    const elementPosition = target.offsetTop - headerOffset;

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  });
});

// ==============================
// Scroll Spy Effect
// ==============================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // offset for fixed navbar
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
