/* eslint-disable */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: '3',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// изменить background
function changeHeaderBg() {
  document.addEventListener('click', (event) => {
    const { target } = event;
    if (target.closest('[data-header-bg-btn]')) {
      const parent = target.closest('[data-header-bg-parent]');
      const button = parent?.querySelector('button');
      if (button.classList.contains('bg-black')) {
        button.classList.remove('bg-black');
        parent.classList.remove('bg-aqua');
      } else {
        button.classList.add('bg-black');
        parent.classList.add('bg-aqua');
      }
    }
  });
}
changeHeaderBg();

// счетчик лайков
function countLikes() {
  const input = document.querySelector('[data-likes-count-input]');
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (target.closest('[data-likes-count-btn]')){
      const value = Number(input.value);
      input.value = value + 1;
    }
  })
}
countLikes();
