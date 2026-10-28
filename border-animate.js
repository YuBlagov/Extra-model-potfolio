document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('border-animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(section => {
    observer.observe(section);
  });
});

// Play lower videos only when they scroll into view, pause when out of view
document.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('video.lazy-video');
  const vObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const v = entry.target;
      if (entry.isIntersecting) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, { rootMargin: '200px 0px', threshold: 0.1 });
  videos.forEach(v => vObserver.observe(v));
});
