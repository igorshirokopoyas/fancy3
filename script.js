const leadForm = document.getElementById('leadForm');

if (leadForm) {
  leadForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const toast = document.getElementById('toast');
    toast.style.display = 'block';
    setTimeout(() => { toast.style.display = 'none'; }, 4500);
    // Здесь подключается ваша CRM/API/Telegram/email.
    // Пример: fetch('/api/lead/', { method: 'POST', body: new FormData(this) })
    this.reset();
  });
}

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const toast = document.getElementById('toast');
    toast.style.display = 'block';
    setTimeout(() => { toast.style.display = 'none'; }, 4500);
    this.reset();
  });
}
