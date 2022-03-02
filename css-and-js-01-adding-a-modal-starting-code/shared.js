const backdrop = document.getElementsByClassName('backdrop')[0];
const modal = document.getElementsByClassName('modal')[0];
const selectPlanButtons = [...document.getElementsByClassName('plan')]
  .flatMap(plan => [...plan.getElementsByClassName('button')]);

selectPlanButtons.forEach(selectPlanButton =>
  selectPlanButton.addEventListener('click', () => {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
  })
);
