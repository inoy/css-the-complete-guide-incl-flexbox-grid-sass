const backdrop = document.getElementsByClassName('backdrop')[0];
const modal = document.getElementsByClassName('modal')[0];
const mobileNav = document.getElementsByClassName('mobile-nav')[0];

const openModal = () => {
  backdrop.classList.add('open');
  modal.classList.add('open');
};

const closeModal = () => {
  backdrop.classList.remove('open');
  modal.classList.remove('open');
};

backdrop.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  backdrop.classList.remove('open');
  if (modal) {
    modal.classList.remove('open');
  }
});

const selectPlanButtons = [...document.getElementsByClassName('plan')]
  .flatMap(plan => [...plan.getElementsByClassName('button')]);
selectPlanButtons.forEach(selectPlanButton => {
  selectPlanButton.addEventListener('click', openModal);
});

const modalActionNegativeButton = document.getElementsByClassName('modal__action--negative')[0];
if (modalActionNegativeButton) {
  modalActionNegativeButton.addEventListener('click', closeModal);
}

const toggleButton = document.getElementsByClassName('toggle-button')[0];
toggleButton.addEventListener('click', () => {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});
