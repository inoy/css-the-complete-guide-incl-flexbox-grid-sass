const backdrop = document.getElementsByClassName('backdrop')[0];
const modal = document.getElementsByClassName('modal')[0];

const openModal = () => {
  backdrop.style.display = 'block';
  modal.style.display = 'block';
};

const closeModal = () => {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
};

const selectPlanButtons = [...document.getElementsByClassName('plan')]
  .flatMap(plan => [...plan.getElementsByClassName('button')]);
selectPlanButtons.forEach(selectPlanButton =>
  selectPlanButton.addEventListener('click', openModal)
);

const modalActionNegativeButton = document.getElementsByClassName('modal__action--negative')[0];
modalActionNegativeButton.addEventListener('click', closeModal);
