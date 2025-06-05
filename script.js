document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('nav ul');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  }

  // Certification modal
  const modal = document.getElementById('modal');
  const modalImg = modal.querySelector('img');
  document.querySelectorAll('#certifications .card img').forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      modal.classList.add('show');
    });
  });
  modal.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  // Scroll to top button
  const scrollBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

