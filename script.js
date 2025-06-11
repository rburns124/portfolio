document.addEventListener('DOMContentLoaded', () => {
  // Toggle the nav menu on phones
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('nav ul');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  }

  // Click a cert to open it larger
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

  // Hidden thank-you note for my mentors
  const certTitle = document.querySelector('#certifications h2');
  const thanksMsg = document.getElementById('cert-thank-you');
  if (certTitle && thanksMsg) {
    certTitle.addEventListener('click', () => {
      thanksMsg.classList.toggle('visible');
    });
  }

  // Show a button that scrolls to the top
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

