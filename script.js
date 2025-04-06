// === DARK MODE TOGGLE ===
const toggleButton = document.getElementById('dark-mode-toggle');
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.add('transition-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));

    setTimeout(() => {
      document.body.classList.remove('transition-mode');
    }, 500);
  });

  // Apply saved preference
  if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
  }
}

// === READING PROGRESS BAR ===
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    progressBar.style.width = scrollPercent + '%';
  }
});

// === LAZY LOADING IMAGES WITH FADE-IN ===
const lazyImages = document.querySelectorAll('img.lazy-load');
if ('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.onload = () => {
          img.classList.add('lazy-load-loaded');
        };
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => imgObserver.observe(img));
}

// === ESC KEY FUNCTIONALITY FOR MODALS/UX ENHANCEMENTS ===
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Future use: Close modals, overlays, etc.
    console.log('ESC pressed - implement modal closing if needed.');
  }
});

// === OPTIONAL: SAVE EMAIL LOCALLY FOR UX PERSISTENCE ===
const emailInput = document.querySelector('#newsletter input[type="email"]');
if (emailInput) {
  emailInput.value = localStorage.getItem('savedEmail') || '';
  emailInput.addEventListener('input', () => {
    localStorage.setItem('savedEmail', emailInput.value);
  });
}

