// Select navbar and links
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar ul li a');
const sections = document.querySelectorAll('.section');

// Add scroll event listener
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Highlight active menu link based on section visibility
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});
