document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for nav links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Handle form submission
  const orderForm = document.querySelector('form');

  if (orderForm) {
    orderForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = orderForm.querySelector('input[type="text"]');
      const emailInput = orderForm.querySelector('input[type="email"]');
      const productSelect = orderForm.querySelector('select');
      const quantityInput = orderForm.querySelector('input[type="number"]');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const product = productSelect.value;
      const quantity = parseInt(quantityInput.value, 10);

      if (!name || !email || !product || isNaN(quantity) || quantity <= 0) {
        alert('Please fill in all fields correctly.');
        return;
      }

      alert(`Thank you, ${name}! Your order for ${quantity} x ${product} has been placed.`);
      orderForm.reset();
    });
  }
});
