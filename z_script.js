```javascript
// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener('click', function(e){

    e.preventDefault();

    const target =
    document.querySelector(this.getAttribute('href'));

    if(target){

      target.scrollIntoView({
        behavior: 'smooth'
      });

    }

  });

});

// ================================
// Active Nav Link
// ================================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
    section.offsetTop - 150;

    const sectionHeight =
    section.clientHeight;

    if(window.scrollY >= sectionTop){

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if(
      link.getAttribute("href") ===
      `#${current}`
    ){

      link.classList.add("active");

    }

  });

});

// ================================
// Navbar Shadow on Scroll
// ================================

const header =
document.querySelector("header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    header.style.boxShadow =
    "0 10px 30px rgba(0,0,0,.08)";

  }

  else{

    header.style.boxShadow =
    "none";

  }

});

// ================================
// Reveal Animation
// ================================

const observer =
new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

},{
  threshold:0.15
});

document
.querySelectorAll(
'.project-card, .skill-card, .contact-card, .about-text, .about-image'
)
.forEach(el => {

  el.classList.add("hidden");

  observer.observe(el);

});

// ================================
// Typewriter Hero Effect
// ================================

const heroText =
document.querySelector(".hero-description");

if(heroText){

  const text =
  heroText.innerText;

  heroText.innerText = "";

  let index = 0;

  function type(){

    if(index < text.length){

      heroText.innerText +=
      text.charAt(index);

      index++;

      setTimeout(type, 25);

    }

  }

  type();

}
```
