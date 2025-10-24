// Smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    const offset = 100;
    const position = target.offsetTop - offset;
    window.scrollTo({ top: position, behavior: 'smooth' });
  });
});

// Scroll Spy
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const top = section.offsetTop - 120;
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
