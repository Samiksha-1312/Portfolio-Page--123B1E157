// Smooth scroll for navbar links only
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    
    // Only smooth-scroll if the link is an in-page anchor (starts with '#')
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        const offset = 70;
        const position = target.offsetTop - offset;
        window.scrollTo({ top: position, behavior: 'smooth' });
      }
    }
  });
});

// Scroll Spy
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const top = section.offsetTop - 90;
    const height = section.offsetHeight;
    if (window.scrollY >= top && window.scrollY < top + height) {
      current = section.getAttribute('id');
    }
  });
  
  links.forEach(link => link.classList.remove('active'));
  links.forEach(link => { 
    if(link.getAttribute('href') === `#${current}`) {
      link.classList.add('active'); 
    }
  });
});


document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
  link.addEventListener('click', e => {
    // Allow default mailto behavior (important!)
    window.location.href = link.getAttribute('href');
  });
});
