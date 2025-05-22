const lazyImages = document.querySelectorAll('.lazy-img');

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy-img');
      observer.unobserve(img);
    }
  });
}, {
  root: document.querySelector('.carousel-container'),
  rootMargin: '0px',
  threshold: 0.1
});

lazyImages.forEach(img => {
  imageObserver.observe(img);
});