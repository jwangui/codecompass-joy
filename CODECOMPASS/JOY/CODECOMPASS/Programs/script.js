const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
  accordion.addEventListener('click', () => {
    // Toggle active class for the clicked accordion
    accordion.classList.toggle('active');

    // Toggle the visibility of the panel (content) associated with the clicked accordion
    const panel = accordion.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
});
