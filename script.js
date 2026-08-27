const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const modal = document.getElementById('orderModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const vehicleSelect = document.getElementById('vehicleSelect');
const orderForm = document.getElementById('orderForm');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('mobile-open');
});

function openOrder(model) {
  modalTitle.textContent = model === 'General Enquiry' ? 'Get Started' : model;

  if (['Model Y', 'Cybertruck', 'Model S', 'Model X'].includes(model)) {
    vehicleSelect.value = model;
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeOrder() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-model]').forEach(button => {
  button.addEventListener('click', () => openOrder(button.dataset.model));
});

closeModal.addEventListener('click', closeOrder);

modal.addEventListener('click', event => {
  if (event.target === modal) closeOrder();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeOrder();
});

orderForm.addEventListener('submit', event => {
  event.preventDefault();

  const name = orderForm.elements.name.value.trim();
  const vehicle = orderForm.elements.vehicle.value;

  alert(`Thanks, ${name}! Your ${vehicle} request has been received in this demo.`);

  orderForm.reset();
  closeOrder();
});
