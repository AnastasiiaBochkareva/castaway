function showDetails() {
  document.addEventListener('click', (event) => {
    const { target } = event;
    if (target.closest('.btn__show')) {
      const parent = target.closest('.product-card__col');
      if (parent.classList.contains('active')) {
        parent.classList.remove('active');
      } else {
        parent.classList.add('active');
      }
    }
  });
}
showDetails();
