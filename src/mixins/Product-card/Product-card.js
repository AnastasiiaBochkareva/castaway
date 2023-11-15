function showDetails() {
  document.addEventListener('click', (event) => {
    const { target } = event;
    if (target.closest('.product-card__btn')) {
      const parent = target.closest('.product-card__info');
      if (parent.classList.contains('active')) {
        parent.classList.remove('active');
      } else {
        parent.classList.add('active');
      }
    }
  });
}
showDetails();
