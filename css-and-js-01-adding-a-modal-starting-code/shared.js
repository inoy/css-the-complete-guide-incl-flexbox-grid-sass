const backdrop = document.getElementsByClassName('backdrop')[0];
const modal = document.getElementsByClassName('modal')[0];
const mobileNav = document.getElementsByClassName('mobile-nav')[0];

const openModal = () => {
  backdrop.style.display = 'block';
  modal.style.display = 'block';
};

const closeModal = () => {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
};

backdrop.addEventListener('click', () => {
  mobileNav.style.display = 'none';
  closeModal();
});

const selectPlanButtons = [...document.getElementsByClassName('plan')]
  .flatMap(plan => [...plan.getElementsByClassName('button')]);
selectPlanButtons.forEach(selectPlanButton =>
  selectPlanButton.addEventListener('click', openModal)
);

const modalActionNegativeButton = document.getElementsByClassName('modal__action--negative')[0];
modalActionNegativeButton.addEventListener('click', closeModal);

const toggleButton = document.getElementsByClassName('toggle-button')[0];
toggleButton.addEventListener('click', () => {
  mobileNav.style.display = 'block';
  backdrop.style.display = 'block';
});
