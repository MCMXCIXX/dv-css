document.querySelectorAll('.term__header').forEach((btn, idx) => {
  btn.addEventListener('click', function () {
    const body = this.nextElementSibling;
    const icon = this.querySelector('.term__icon');
    const isOpen = !body.classList.contains('collapsed');

    // Свернуть все
    document.querySelectorAll('.term__body').forEach(el => el.classList.add('collapsed'));
    document.querySelectorAll('.term__icon').forEach(el => el.classList.remove('active'));

    // Открыть только если был закрыт
    if (isOpen) return;
    body.classList.remove('collapsed');
    icon.classList.add('active');
  });
});

// Открыть первый по умолчанию
document.addEventListener('DOMContentLoaded', () => {
  const firstBody = document.querySelector('.term__body');
  const firstIcon = document.querySelector('.term__header .term__icon');
  if (firstBody) firstBody.classList.remove('collapsed');
  if (firstIcon) firstIcon.classList.add('active');
});