const bouton = document.querySelector('.circular-button');
const sectionSombre = document.querySelector('.fond-noir');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      bouton.classList.add('invert');
    } else {
      bouton.classList.remove('invert');
    }
  });
}, {
  threshold: 0.3 // déclenche quand 50% de la section est visible
});

observer.observe(sectionSombre);
